

let sliderCreate=(req,res)=>{
    res.send(
        {
            status:true,
            message:"Slider  Added"
        }
    )
}

let sliderView=(req,res)=>{
    res.send(
        {
            status:true,
            message:"Slider  View"
        }
    )
}
let sliderDelete=(req,res)=>{
    res.send(
        {
            status:true,
            message:"Slider  Delete"
        }
    )
}

let sliderUpdate=(req,res)=>{
    res.send(
        {
            status:true,
            message:"Slider  Update"
        }
    )
}

module.exports={sliderCreate,sliderView,sliderDelete,sliderUpdate}