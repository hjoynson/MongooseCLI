require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addMovie } = require("./movie/functions.js");

const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor });

    } else if (yargsObj.list) {
        //find movies
    } else if (yargsObj.update) {
        //update a movie
    } else if (yargsObj.delete) {
        //delete a movie
    } else {
        console.log("Incorrect command");
    }
   await mongoose.disconnect();

};

app(yargs.argv);