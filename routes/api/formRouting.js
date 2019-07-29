const express = require("express");
require('dotenv').config();
const app = express();
const path = require('path');
var routeDef = '../../../views'
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
    var imageUrlOnS3 = req.body.imageURL
    var cask;
    var price;

    if (bundle === 'Bronze') {
        cask = '2';
        price = '5,995';
    } else if (bundle === 'Silver') {
        cask = '5';
        price = '13,995';
    } else if (bundle === 'Gold') {
        cask = '10';
        price = '26,995';
    } else if (bundle === 'Diamond') {
        cask = '15';
        price = '38,495';
    } else if (bundle === 'Platinum') {
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
        price: price,
        imageUrlOnS3: imageUrlOnS3
      };

    nodemailerMailgun.sendMail({
        from: {name: 'Irish Whiskey Assets', address: process.env.companyEmail},
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
        from: {name: 'Irish Whiskey Assets', address: process.env.companyEmail},
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

formRoutes.route('/contact').post(function (req, res) {

    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    var message = req.body.message;


    var contextObjectContact = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        message: message,
        email: email
      };

    nodemailerMailgun.sendMail({
        from: {name: 'Irish Whiskey Assets', address: process.env.companyEmail},
        to: process.env.companyEmail,
        subject: 'New Contact Form Entry',
        template: {
            name: 'emailService/contact.hbs',
            engine: 'handlebars',
            context: contextObjectContact
          }
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
    });

    res.sendFile(path.join(__dirname + routeDef + '/confirmation.html'));
})

const upload = require('../../services/image-upload');
const singleUpload = upload.single('image');

formRoutes.route('/upload_image').post(function (req, res) {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(422).send({
                errors: [{
                    title: 'Image Upload Error',
                    detail: err.message
                }]
            });
        }
        return res.json({
            'imageUrl': req.file.location
        });
    });
});

module.exports = formRoutes;
