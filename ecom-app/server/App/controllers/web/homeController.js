const categoryModel = require("../../models/categoryModel")
require("../../models/subCategoryModel")
require("../../models/subSubCategoryModel")

let homeController = {
    megaMenu: async (req, res) => {
        let data = await categoryModel
            .find({ status: true })
            .select("name slug")
            .populate({
                path: "subCategories",  //Virtual Column
                match: { status: true },
                select: "name slug",
                options: { sort: { order: 1 } },
                populate: {
                    path: "subSubCategories",  //Virtual Column
                    match: { status: true },
                    select: "name slug",
                    options: { sort: { order: 1 } },
                }
            })

        res.send({
            status: true,
            message: "Mega Menu",
            data,
        })
    },
}



// let sliderData=async (req, res)=>{
//         let data=await sliderModel.find({status:true}).select("name image order").sort({order:1})
//         res.send({
//             status: true,
//             message: "Slider Data",
//             data,
//         })
// }


module.exports = homeController
