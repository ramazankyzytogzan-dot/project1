require('dotenv').config();
const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4, 
            serverSelectionTimeoutMS: 15000, 
        };
        
        // Прямая ссылка на узлы кластера. Она не использует SRV, поэтому ECONNREFUSED исчезнет.
        const url = process.env.DB_URL || "mongodb://127.0.0.1:27017/my_dev_db";
        console.log("Пробую прямое подключение...");
        await mongoose.connect(url, connectionParams);
        
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};