let express = require("express");

const multer  = require('multer')
const categoryController = require("../../controllers/admin/categoryController");

let categoryRoute = express.Router();

const storage=multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            // console.log(file);
            
            cb(null,"uploads/category")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)
let uploads=multer({storage:storage})
// let uploads=multer({dest:"uploads/category"})
// File Upload ->file object return controller ->filename,type,size
//uploads ->single
//uploads  ->multiple ->fields
//uploads  -->group

////http://localhost:8000/admin/category/create
categoryRoute.post("/create", uploads.single('image')   ,categoryController.create );

categoryRoute.get('/view',categoryController.view)

module.exports=categoryRoute
