const mongoose = require("mongoose");
const { log } = require("node:console");
async function dbCall() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DbName}`);
    console.log(`✅ Database connected: ${process.env.DbName}`);
    
  } catch (error) {
    console.log("Failed to connect with database", error);
  }
}
    module.exports = {
        dbCall
    }
