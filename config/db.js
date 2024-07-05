const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/weather");

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});
connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});