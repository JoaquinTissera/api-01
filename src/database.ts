import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://prueva:monoloco123@cluster0.o6cei.mongodb.net/api-version-01?retryWrites=true&w=majority")
    console.log("database is conneted to", db.connection.name);
  } catch (e) {
    console.log(e); 
  }
})();