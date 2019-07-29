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

pageRoutes.get("/selling", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/selling.html'));
});

pageRoutes.get("/our-investment-model", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/our-investment-model.html'));
});

pageRoutes.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/contact.html'));
});

pageRoutes.get("/privacy-policy", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/privacy-policy.html'));
});

pageRoutes.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/contact.html'));
});

pageRoutes.get("/confirmation", (req, res) => {
    res.sendFile(path.join(__dirname + routeDef + '/confirmation.html'));
});

module.exports = pageRoutes;
