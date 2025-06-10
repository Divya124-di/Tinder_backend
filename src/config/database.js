const mongoose = require("mongoose");

const connectDB = async () => {
await mongoose.connect(
  "mongodb+srv://namastedev:MXoqpKsPUDbqMrmY@node0.2p914.mongodb.net/devTinder"
); 
};


connectDB().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});
module.exports = connectDB; 