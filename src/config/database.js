const mongoose = require("mongoose");

const connectDB = async () => {
await mongoose.connect(process.env.DB_CONNECTION_SECRET); 
};


connectDB().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});
module.exports = connectDB; 