const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
require('dotenv').config();

// TRY REAK UP INTO MODULAR FILES FOR EACH ASPECT 

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "views")));

app.get('/how-it-works', function (req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/how-it-works.html'));
});

app.get('/purchase', function (req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/purchase.html'));
});

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
    auth: {
        
    },
    proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

nodemailerMailgun.sendMail({
    from: 'myemail@example.com',
    to: 'recipient@domain.com', // An array if you have multiple recipients.
    cc: 'second@domain.com',
    bcc: 'secretagent@company.gov',
    subject: 'Hey you, awesome!',
    'h:Reply-To': 'reply2this@company.com',
    //You can use "html:" to send HTML email content. It's magic!
    html: '<b>Wow Big powerful letters</b>',
    //You can use "text:" to send plain-text content. It's oldschool!
    text: 'Mailgun rocks, pow pow!'
}, function (err, info) {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log('Response: ' + info);
    }
});

app.post('/purchase', function (req, res) {
    var bundle = req.body.bundle;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var country = req.body.country;
    var city = req.body.city;
    var address1 = req.body.address1;
    var address2 = req.body.address2;

    console.log(bundle + firstName + lastName + country + city + address1 + address2);
    res.json("got it")
})
app.listen(port, () => console.log(`Server running on port ${port}`));