const mongoose = require('mongoose');

const dbURI = "mongodb+srv://harshithathota2000:XlFkhhwWJc0rIqK8@cluster0.xql3geo.mongodb.net/";

const connectToDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connectToDB;

