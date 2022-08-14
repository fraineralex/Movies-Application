const MovieModel = require("../models/MovieModel");

exports.GetIndex = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/index", {
      pageTitle: "Listado de Películas",
      movies: movies,
      hasMovies: movies.length > 0,
      home: true,
    });
  });
};

exports.GetActionMovie = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/actionMovies", {
      pageTitle: "Películas de Acción",
      movies: movies,
      hasMovies: movies.length > 0,
      actionMovie: true,
    });
  });
};

exports.GetHorrorMovie = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/horrorMovies", {
      pageTitle: "Películas de Terror",
      movies: movies,
      hasMovies: movies.length > 0,
      horrorMovie: true,
    });
  });
};

exports.GetComedyMovie = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/comedyMovies", {
      pageTitle: "Películas de Comedia",
      movies: movies,
      hasMovies: movies.length > 0,
      comedyMovie: true,
    });
  });
};

exports.GetSuspenseMovie = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/suspenseMovies", {
      pageTitle: "Películas de Suspenso",
      movies: movies,
      hasMovies: movies.length > 0,
      suspenseMovie: true,
    });
  });
};

exports.GetDocumentariesMovie = (req, res, next) => {
  //arrow functions
  MovieModel.GetAll(function (movies) {
    res.render("client/documentariesMovies", {
      pageTitle: "Películas Documentales",
      movies: movies,
      hasMovies: movies.length > 0,
      documentariesMovie: true,
    });
  });
};
