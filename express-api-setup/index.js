let express=require("express")
let App=express()

App.use(express.json()) //Allow Frontend Object -> Backend



//New
//http://localhost:8000/news
App.get(
    "/news", //API URL
    (req,res)=>{

        console.log(req.query);
        

        let obj={
            status:true,
            data1:req.query,
            data:[
                {
                    title:"News Title",
                    des:"News Des",
                },
                {
                    title:"News Title2",
                    des:"News Des2",
                }
            ]
        }

        res.send(obj) 
    }
)

//Product

App.get(
    '/product',
    (req,res)=>{
         let obj={
            status:true,
            data:[
                {
                    title:"Product Title",
                    des:"Product Des",
                },
                {
                    title:"Product Title2",
                    des:"Product Des2",
                }
            ]
        }

        res.send(obj) 
    }
)

App.get(
    '/product/:id',
    (req,res)=>{

        console.log(req.params);  //Object { id:2 }
        
        let {id}=req.params

        res.send(
            {
                status:true,
                data:"Product Details",
                id
            }
        )
    }
)

//Login

App.post(
    '/login',
    (request,response)=>{
        console.log(request.body);
        let {username,password}=request.body
        // console.log(req.body.username);
        response.send(
            {
                status:true,
                message:"Login Done",
                data:request.body
            }
        )
    }
)





App.listen(
    "8000",
    ()=>{
        console.log("Server Start");
        
    }
)