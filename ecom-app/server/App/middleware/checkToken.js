let checkToken = (req, res, next) => {
  if (
    req.query.token == "" ||
    req.query.token == undefined ||
    req.query.token == null
  ) {
   return res.send({
      status: false,
      msg: "Please send the token",
    });
  }

  if( req.query.token!=process.env.TOKEN){
    return res.send({
      status: false,
      msg: "Please fill the token value",
    });
  }

  next()

};

module.exports = checkToken;
