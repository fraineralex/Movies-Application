const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movies.json"
);

const GetAllMoviesFromFile = function (callBack) {
  fs.readFile(dataPath, function (error, data) {
    if (error) {
      callBack([]);
    } else {
      callBack(JSON.parse(data));
    }
  });
};

module.exports = class Movie {
  constructor(id, title, imageUrl, gender, description, status) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.gender = gender;
    this.description = description;
    this.status = status;
  }

  Save() {
    GetAllMoviesFromFile((movies) => {
      if (this.id) {
        const editMovieIndex = movies.findIndex(
          (mov) => mov.id === this.id
        );

        movies[editMovieIndex] = this;
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      } else {
        this.id = Math.random().toString();
        movies.push(this);
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      }
    });
  }

  static GetAll(callBack) {
    GetAllMoviesFromFile(callBack);
  }

  static GetById(id, callBack) {
    GetAllMoviesFromFile((movies) => {
      const movie = movies.find((movie) => movie.id === id);
      callBack(movie);
    });
  }

  static Delete(id) {
    GetAllMoviesFromFile((movies) => {

      const newMovieList = movies.filter((movie) => movie.id !== id);

      fs.writeFile(dataPath, JSON.stringify(newMovieList), function (error) {
        console.log(error);
      });
    });
  }
};
