const Movie = require("./model.js");


//add movie function
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

// list movie function
exports.listMovie = async () => {
    try {
        const response = await Movie.find();
        console.log(response)
    } catch {
        console.log(error)
    };
};