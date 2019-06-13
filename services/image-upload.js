const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config()

aws.config.update({
  secretAccessKey: process.env.AWSSecretKey,
  accessKeyId: process.env.AWSAccessKeyId,
  region: "eu-west-1"
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG, PNG, and PDF is allowed!'), false);
  }
}

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3: s3,
    bucket: 'irish-whiskey-test',
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: 'METADATA'
      });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

module.exports = upload;