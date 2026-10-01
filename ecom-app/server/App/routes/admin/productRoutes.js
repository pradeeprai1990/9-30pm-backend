let express = require("express");
const productController = require("../../controllers/admin/productController");
const multer = require("multer");
let productRoute = express.Router();
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            // console.log(file);

            cb(null, "uploads/product")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    }
)
let uploads = multer({ storage: storage })

productRoute.post('/create', uploads.fields(
    [
        {
            name: "image",
            maxCount: 1
        },
        {
            name: "backImage",
            maxCount: 1
        },
        {
            name: "gallery",
            maxCount: 20
        }
    ]
), productController.create)
productRoute.get('/view', productController.view)
productRoute.get('/details/:id', productController.details)
productRoute.get('/parent', productController.parent)
productRoute.get('/sub-category/:parentId', productController.subCategory)
productRoute.get('/sub-sub-category/:subcatId', productController.subsubCategory)
productRoute.get('/material', productController.material)
productRoute.get('/colors', productController.colors)

module.exports = productRoute