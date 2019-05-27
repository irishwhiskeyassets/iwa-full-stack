const express = require("express");
const app = express();
require('dotenv').config();
const pageRoutes = express.Router();
const path = require('path');
var routeDef = '../../../views'

app.use(express.static(path.join(__dirname, "views")));

pageRoutes.get("/how-it-works", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/how-it-works.html'));
});

pageRoutes.get("/purchase", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/purchase.html'));
});

module.exports = pageRoutes;
