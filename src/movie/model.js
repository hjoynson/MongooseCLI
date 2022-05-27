const mongoose = require("mongoose");

//schemas are the instructions
// we use a schema and assign it to a model
//schemas are class construction
//constraints defined

const movieSchema = new mongoose.Schema({
    //define keyvalue pair
    title: {
        type:String,
        unique: true,
        required: true,
    },
    actor:{
        type: String,
        default: "Not specified"
    }
});

//give schema to model
//model can be enforced onto database

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;