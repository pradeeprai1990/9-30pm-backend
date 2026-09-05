let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let cors=require("cors")
require("dotenv").config();
let app = express();
app.use(cors()) //
app.use(express.json());

//MongoDB connection
//Database connection code would go here (e.g., using mongoose or MongoClient)

app.post("/contact/save", async (req, res) => {
  let dbName = await dbConnection(); //return DataBase Create
  //Collection Create
  let enquireCollection = await dbName.collection("enquire");
  let insertRes = await enquireCollection.insertOne(req.body);
  let obj = {
    status: "success",
    message: "Contact saved successfully",
    insertRes,
  };
  res.send(obj);
});

app.get("/contact/view", async (req, res) => {
  let dbName = await dbConnection();
  let enquireCollection = await dbName.collection("enquire");
  let data = await enquireCollection.find().toArray();
  let obj = {
    status: "success",
    message: "Contact viewed successfully",
    data,
  };
  res.send(obj);
});

app.delete("/contact/delete/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let dbName = await dbConnection();
  let enquireCollection = await dbName.collection("enquire");
  let delres=await enquireCollection.deleteOne({
    _id: new ObjectId(id),
  });
  let obj = {
    status: "success",
    message: "Contact deleted successfully",
    delres
  };
  res.send(obj);
});

app.put("/contact/update", (req, res) => {
  let obj = {
    status: "success",
    message: "Contact updated successfully",
  };
  res.send(obj);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
