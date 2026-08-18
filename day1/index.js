// let login=require("./authController.js") //default export calling

let {login,register,changePassword,dbName}=require("./authController.js");
const cartController = require("./cartController.js");

console.log(login()); //Login
                    //Undefined
console.log(register()); //Login
                    //Undefined
console.log(changePassword()); //Login

console.log(dbName);

console.log(cartController.addToCart());
console.log(cartController.deleteCart());
console.log(cartController.changeQty());
// let a=10
// let b=40
// console.log(a+b+88);


//  "type": "commonjs"   require()

////  "type": "module"   import