const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:%Blore560038@wish4ahome-yznum.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
/* client.connect(err => {
  const collection = client.db("test").collection("mycollection");
  // perform actions on the collection object
  client.close();
}); */

mongoose.connect(uri,auth :{
	user:"admin",
	password:"%Blore560038"

},{useNewUrlParser:true});
