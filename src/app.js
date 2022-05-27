require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { 

    addMovie,
    delMovie,
    updMovie,
    listMovie

} = require("./movie/functions.js"); //connects the functions
const Movie = require("./movie/model.js");




//add movie
const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor });


//find movies
    } else if (yargsObj.list) {
        await listMovie()
            

//update a movie
    } else if (yargsObj.update) {
       const response = await Movie.findOneAndUpdate(
           
        {title:yargsObj.title},
        
        {$set: {
            title: yargsObj.newTitle,
        }},
        {new:true});

        console.log(response);


//delete a movie
    } else if (yargsObj.delete) {
       const response = await Movie.deleteOne(yargsObj);
        console.log(response);
        

    } else {
        console.log("Incorrect command");
    }
   await mongoose.disconnect();

};














app(yargs.argv);