let express = require("express");

const multer  = require('multer');
const { subCategoryController } = require("../../controllers/admin/subCategoryController");
const { subSubCategoryController } = require("../../controllers/admin/subSubCategoryController");

let subSubcategoryRoute = express.Router();

const storage=multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            // console.log(file);
            
            cb(null,"uploads/subsubcategory")
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
subSubcategoryRoute.post("/create", uploads.single('image'),subSubCategoryController.create   );

subSubcategoryRoute.get('/view',subSubCategoryController.view)


subSubcategoryRoute.get('/parent',subSubCategoryController.parent)


subSubcategoryRoute.get('/sub-category/:parentId',subSubCategoryController.subCategory)

module.exports=subSubcategoryRoute
