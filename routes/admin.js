const express = require("express");

const adminController =require("../controllers/AdminController");

const router = express.Router();

router.get("/add-movie", adminController.GetAddMovie);

router.post("/add-movie", adminController.PostAddMovie);

router.get("/movies", adminController.GetAdminMovies);

router.get("/edit-movie/:movieId", adminController.GetEditMovie); // route params , query params
router.post("/edit-movie", adminController.PostEditMovie);

router.post("/delete-movie", adminController.DeleteMovie);

module.exports = router;