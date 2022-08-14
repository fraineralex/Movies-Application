const Movie = require("../models/MovieModel");

exports.GetAddMovie = (req, res, next) => {
  res.render("admin/save-movie", {
    pageTitle: "Registrar Pelicula",
    registerMovie: true,
    editMode: false,
  });
};

exports.GetAdminMovies = (req, res, next) => {
  Movie.GetAll(function (movies) {
    res.render("admin/movie-list", {
      pageTitle: "Administrar Películas",
      adminMovie: true,
      movies: movies,
      hasMovies: movies.length > 0,
    });
  });
};

exports.PostAddMovie = (req, res, next) => {
  const title = req.body.Title;
  const image = req.body.ImageUrl;
  const gender = req.body.Gender;
  const description = req.body.Description;
  const status = "active";

  const movie = new Movie(null, title, image, gender, description, status);
  movie.Save();

  res.redirect("/");
};

exports.GetEditMovie = (req, res, next) => {
  const movieId = req.params.movieId;
  const edit = req.query.edit;

  if (!edit) {
    return res.redirect("/");
  }

  Movie.GetById(movieId, (movie) => {
    res.render("admin/save-movie", {
      pageTitle: "Actualizar Pelicula",
      editMode: edit,
      movie: movie,
    });
  });
};

exports.PostEditMovie = (req, res, next) => {
  const id = req.body.MovieId;
  const title = req.body.Title;
  const image = req.body.ImageUrl;
  const gender = req.body.Gender;
  const description = req.body.Description;
  const status = req.body.Status;


  const movie = new Movie(id,title,image,gender,description,status);
  movie.Save();

  res.redirect("/admin/movies");
};

exports.DeleteMovie = (req, res, next) => {
  const id = req.body.MovieId;


  Movie.Delete(id);

  res.redirect("/admin/movies");
};
