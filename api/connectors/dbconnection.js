const mongoose = require("mongoose");

const databaseconnection = async () => {
  try {
    
    await mongoose.connect("mongodb://localhost:27017/mern-todo",{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
    console.log("Database successfully connected....");
  } catch (error) {
    console.log(error);
  }
};
module.exports = databaseconnection;