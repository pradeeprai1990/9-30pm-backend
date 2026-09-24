let express = require("express");

const multer  = require('multer');
const { subCategoryController } = require("../../controllers/admin/subCategoryController");

let subcategoryRoute = express.Router();

const storage=multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            // console.log(file);
            
            cb(null,"uploads/subcategory")
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

////http://localhost:8000/admin/subcategory/create
subcategoryRoute.post("/create", uploads.single('image'),subCategoryController.create   );

subcategoryRoute.get('/view',subCategoryController.view)


subcategoryRoute.get('/parent',subCategoryController.parent)

module.exports=subcategoryRoute
