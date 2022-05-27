require("dotenv").config();
const mongoose = require("mongoose");

//make connection function
const connection = async () => {
    try {

        //takes URI, can be manupulated anywhere in application
        //provided this is the first function that runs
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");

    } catch (error) {
        console.log(error)
    }
}

connection();