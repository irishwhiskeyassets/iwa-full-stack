const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const formRoutes = require("./routes/api/formRouting");
const pageRoutes = require("./routes/api/pageRouting");
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "views")));

app.use('/api/form', formRoutes);

app.use('/', pageRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));