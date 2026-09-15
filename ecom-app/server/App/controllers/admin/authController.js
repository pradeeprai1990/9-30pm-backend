let authController={
    login:(req,res)=>{
        res.send(
            {
                status:true,

                message:"Login DOne"
            }
        )
    }
}


module.exports=authController