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


var auth = {
    auth: {
        api_key: process.env.api_key,
        domain: process.env.domain
    },
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

app.post('/purchase', function (req, res) {
    var bundle = req.body.bundle;
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var country = req.body.country;
    var city = req.body.city;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var cask;
    var price;

    if (bundle === 'bronze') {
        cask = '2';
        price = '5,995';
    } else if (bundle === 'silver') {
        cask = '5';
        price = '13,995';
    } else if (bundle === 'gold') {
        cask = '10';
        price = '26,995';
    } else if (bundle === 'diamond') {
        cask = '15';
        price = '38,495';
    } else if (bundle === 'platinum') {
        cask = '25';
        price = '59,995';
    };

    nodemailerMailgun.sendMail({
        from: process.env.companyEmail,
        to: email,
        subject: 'Whiskey Compnay - Hi ' + firstName + ', thanks for your order.',
        'h:Reply-To': process.env.companyEmail,
        html: '<p>Thank you for ordering the ' + bundle + ' bundle. This is ' + cask+ ' casks worth €' + price+ '.</p>',
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
    });

    nodemailerMailgun.sendMail({
        from: process.env.companyEmail,
        to: [{address:'conorjdeegan@gmail.com'}, {address:'cdeegan@rawcondition.com'}],
        subject: 'New Order Enquiry',
        html: '<p>There is a new order enquiry for the ' + bundle + ' bundle. This is ' + cask + ' casks worth €' + price+ '. The details of the order are: First Name: ' + firstName + ' ' + lastName + ', Email: ' + email + ', Address: ' + address1 + ' ' + address2 + ' ' + city + ' ' + country + '.</p>',
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
    });

    res.json("got it")
})
app.listen(port, () => console.log(`Server running on port ${port}`));