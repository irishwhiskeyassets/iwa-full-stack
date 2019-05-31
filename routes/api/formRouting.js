const express = require("express");
require('dotenv').config();
const path = require('path');
//var routeDef = '../../../views'
const app = express();
app.use(express.static(path.join(__dirname, "views")));
const formRoutes = express.Router();
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var auth = {
    auth: {
        
        api_key: process.env.api_key,
        domain: process.env.domain
    },
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

formRoutes.route('/purchase').post(function (req, res) {
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

    var contextObjectCustomer = {
        firstName: firstName,
        bundle: bundle,
        cask: cask,
        price: price
      };

      var contextObjectBusiness = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        city: city,
        address1: address1,
        address2: address2,
        bundle: bundle,
        cask: cask,
        price: price
      };

    nodemailerMailgun.sendMail({
        from: process.env.companyEmail,
        to: email,
        subject: "Dear " + firstName + ", here's your cask order summary",
        'h:Reply-To': process.env.companyEmail,
        template: {
            name: 'emailService/emailCustomer.hbs',
            engine: 'handlebars',
            context: contextObjectCustomer
          }
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
    });

    nodemailerMailgun.sendMail({
        from: process.env.companyEmail,
        to: [{address: process.env.businessOne}, {address: process.env.businessTwo}, {address: process.env.businessThree}],
        subject: 'New Order Enquiry',
        template: {
            name: 'emailService/emailBusiness.hbs',
            engine: 'handlebars',
            context: contextObjectBusiness
          }
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
    });

    res.json("Succes");
})

module.exports = formRoutes;
