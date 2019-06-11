const express = require("express");
const app = express();
require('dotenv').config();
const pageRoutes = express.Router();
const path = require('path');
var routeDef = '../../../views'

app.use(express.static(path.join(__dirname, "views")));

pageRoutes.get("/step-by-step", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/step-by-step.html'));
});

pageRoutes.get("/purchase", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/purchase.html'));
});

module.exports = pageRoutes;
