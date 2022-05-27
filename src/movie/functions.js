const Movie = require("./model.js");

exports.addMovie = async (movieObj) => {
    //needs to be async because its outside the application
    //interacting outside application, needs to await
    try {
        const response = await Movie.create(movieObj);
        console.log(response);

    } catch (error) {
        console.log(error)
    }
};