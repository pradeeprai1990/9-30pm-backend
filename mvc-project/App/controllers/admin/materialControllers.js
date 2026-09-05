let materialController = {
  create: (req, res) => {
    //DataBase Insert 
    res.send({
      status: true,
      message: "materialController material Addred",
    });
  },
  view: (req, res) => {
    res.send({
      status: true,
      message: "material View",
    });
  },
  delete: (req, res) => {
    res.send({
      status: true,
      message: "material Delete",
    });
  },
  update: (req, res) => {
    res.send({
      status: true,
      message: "material Updated",
    });
  },
  changeStatus:(req,res)=>{
    res.send({
      status: true,
      message: "material Status Changed",
    });
  }
};

module.exports = materialController;
