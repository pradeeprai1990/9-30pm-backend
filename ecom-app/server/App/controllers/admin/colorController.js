const colorModel = require("../../models/colorModel");

let colorController = {
  create: async (req, res) => {
    console.log(req.body);
    let { name, code, order } = req.body;
    //Method1
    //  let insertRes= await colorModel.insertOne(req.body)
    //Method2
    try {
      //Check ColorName Already Exist...
      let checkColor = await colorModel.findOne({ name }); //Object
      if (checkColor) {
        //Error
        return res.send({
          status: false,
          error: {
            "name":"color name already exist.."
          },
        });
      }

      // let checkCode = await colorModel.findOne({ code }); //Object
      // if (checkCode) {
      //   //Error
      //   return res.send({
      //     status: false,
      //     error: {
      //       code: "code name already exist...",
      //     },

      //   });
      // }

      //  let checkOrder = await colorModel.findOne({ order }); //Object
      // if (checkOrder) {
      //   //Error
      //   return res.send({
      //     status: false,
      //     error: {
      //       code: "same order already exist...",
      //     },
      //     oldOrder:checkOrder.order

      //   });
      // }

      let color = await colorModel(req.body);
      let insertRes = await color.save();
      //DataBase Insert
      res.send({
        status: true,
        message: " Color Added",
        insertRes,
      });
    } catch (err) {
      let error = {};
      for (let key in err.errors) {
        error[key] = err.errors[key].message;
        // console.log(key,err.errors[key].message);
      }
      // error={
      //   'name':'Color Name Must Be Atleast 2 Character',
      //   'code':' code  Must Be Atleast 2 Character'
      // }
      res.send({
        status: false,
        error,
      });
    }
  },
  view: async (req, res) => {
    let data = await colorModel.find();
    res.send({
      status: true,
      message: "Color View",
      data,
    });
  },
  delete: async (req, res) => {
    let { ids } = req.body; //Array [color id]
    let delRes = await colorModel.deleteMany({ _id: ids });
    res.send({
      status: true,
      message: "Color Delete",
      delRes,
    });
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateRes = await colorModel.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
    );
    res.send({
      status: true,
      message: "Color Updated",
      updateRes,
    });
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;

    let oldStatus = await colorModel.find({ _id: ids });
    for (let obj of oldStatus) {
      await colorModel.updateOne(
        { _id: obj._id },
        {
          $set: {
            status: !obj.status,
          },
        },
      );
    }
    //  console.log(oldStatus);
    res.send({
      status: true,
      message: "Color Status Changed",
    });
  },
  getDetails:async(req,res)=>{
    let {id}=req.params;
    let data=await colorModel.findOne({_id:id}) 
    res.send({
      status: true,
      message: "Color View",
      data,
    });
  }
};

module.exports = colorController;
