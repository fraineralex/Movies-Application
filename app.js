const express = require("express");
const path = require('path');
const app = express();
const expressHbs = require("express-handlebars");

const adminRouter = require("./routes/admin"); 
const displayRouter = require("./routes/display");
const helperCompare = require("./helpers/compare")
const errorController = require("./controllers/ErrorController");

app.engine("hbs",expressHbs({layoutsDir:'views/layouts/',defaultLayout: 'main-layout',extname:'hbs', 
helpers: {IsEqual: helperCompare.IsEqual}}));
app.set("view engine", "hbs");
app.set("views", "views");

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/admin",adminRouter);
app.use(displayRouter);
app.use("/", errorController.Get404);

app.listen(5002);