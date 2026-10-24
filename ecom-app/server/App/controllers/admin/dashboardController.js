const UserModel = require("../../models/userModels");
const productModel = require("../../models/productModels");
const categoryModel = require("../../models/categoryModel");
const orderModel = require("../../models/orderModel");

let dashboardController = {
  stats: async (req, res) => {
    try {
      //Last 12 months start date (1st of the month)
      let startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 11);
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);

      let [totalUsers, totalCategories, productStats, orderStats, productsByCategory] =
        await Promise.all([
          UserModel.countDocuments(),
          categoryModel.countDocuments(),

          //Product Aggregation -> total, active, out of stock
          productModel.aggregate([
            {
              $group: {
                _id: null,
                totalProducts: { $sum: 1 },
                activeProducts: { $sum: { $cond: ["$status", 1, 0] } },
                outOfStock: { $sum: { $cond: [{ $lte: [{ $ifNull: ["$stocks", 0] }, 0] }, 1, 0] } },
              },
            },
          ]),

          //Order Aggregation -> $facet runs many pipelines on the same orders
          orderModel.aggregate([
            {
              $facet: {
                summary: [
                  {
                    $group: {
                      _id: null,
                      totalOrders: { $sum: 1 },
                      //Failed orders are not counted in revenue
                      totalRevenue: {
                        $sum: { $cond: [{ $ne: ["$orderStatus", "failed"] }, "$totalAmount", 0] },
                      },
                    },
                  },
                ],
                byStatus: [
                  { $group: { _id: "$orderStatus", count: { $sum: 1 } } },
                  { $sort: { count: -1 } },
                ],
                byPaymentMethod: [
                  { $group: { _id: "$paymentMethod", count: { $sum: 1 }, amount: { $sum: "$totalAmount" } } },
                ],
                monthlySales: [
                  { $match: { createdAt: { $gte: startDate }, orderStatus: { $ne: "failed" } } },
                  {
                    $group: {
                      _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
                      orders: { $sum: 1 },
                      revenue: { $sum: "$totalAmount" },
                    },
                  },
                  { $sort: { "_id.year": 1, "_id.month": 1 } },
                ],
                topProducts: [
                  { $match: { orderStatus: { $ne: "failed" } } },
                  { $unwind: "$orderItems" },
                  {
                    $group: {
                      _id: "$orderItems.name",
                      image: { $first: "$orderItems.image" },
                      quantity: { $sum: "$orderItems.quantity" },
                      revenue: {
                        $sum: { $multiply: ["$orderItems.sale_price", "$orderItems.quantity"] },
                      },
                    },
                  },
                  { $sort: { quantity: -1 } },
                  { $limit: 5 },
                ],
                recentOrders: [
                  { $sort: { createdAt: -1 } },
                  { $limit: 5 },
                  {
                    $lookup: {
                      from: "users",
                      localField: "userId",
                      foreignField: "_id",
                      as: "user",
                    },
                  },
                  { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
                  {
                    $project: {
                      totalAmount: 1,
                      orderStatus: 1,
                      paymentStatus: 1,
                      paymentMethod: 1,
                      createdAt: 1,
                      itemCount: { $size: "$orderItems" },
                      userName: "$user.name",
                      userEmail: "$user.email",
                    },
                  },
                ],
              },
            },
          ]),

          //Products per category -> $lookup category name
          productModel.aggregate([
            { $group: { _id: "$parent", count: { $sum: 1 } } },
            {
              $lookup: {
                from: "categories",
                localField: "_id",
                foreignField: "_id",
                as: "category",
              },
            },
            { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
            { $project: { _id: 0, name: { $ifNull: ["$category.name", "Uncategorized"] }, count: 1 } },
            { $sort: { count: -1 } },
          ]),
        ]);

      let orders = orderStats[0];
      let summary = orders.summary[0] || { totalOrders: 0, totalRevenue: 0 };
      let products = productStats[0] || { totalProducts: 0, activeProducts: 0, outOfStock: 0 };

      //Fill missing months with 0 so the chart always has 12 bars
      let monthlySales = [];
      for (let i = 0; i < 12; i++) {
        let d = new Date(startDate);
        d.setMonth(startDate.getMonth() + i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let found = orders.monthlySales.find((m) => m._id.year == year && m._id.month == month);
        monthlySales.push({
          label: d.toLocaleString("en-US", { month: "short", year: "2-digit" }),
          orders: found ? found.orders : 0,
          revenue: found ? found.revenue : 0,
        });
      }

      res.send({
        status: true,
        message: "Dashboard Stats",
        data: {
          totalUsers,
          totalCategories,
          totalProducts: products.totalProducts,
          activeProducts: products.activeProducts,
          outOfStock: products.outOfStock,
          totalOrders: summary.totalOrders,
          totalRevenue: summary.totalRevenue,
          ordersByStatus: orders.byStatus,
          ordersByPaymentMethod: orders.byPaymentMethod,
          monthlySales,
          topProducts: orders.topProducts,
          recentOrders: orders.recentOrders,
          productsByCategory,
        },
      });
    } catch (err) {
      res.send({
        status: false,
        message: "Something went wrong",
        error: err.message,
      });
    }
  },
};

module.exports = dashboardController;
