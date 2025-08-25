const mongoose = require("mongoose");
const { log } = require("node:console");
async function dbCall() {
  try {
    const db = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DbName}`);
    console.log("Db is connected");
    console.log(db);
    
  } catch (error) {
    console.log("Failed to connect with database", error);
  }
}
    module.exports = {
        dbCall
    }
