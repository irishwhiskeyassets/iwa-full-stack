const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "views")));

app.get('/how-it-works', function(req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/how-it-works.html'));
});

app.get('/purchase', function(req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/purchase.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));