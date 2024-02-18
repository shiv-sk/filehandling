const express = require('express');
const Router = express.Router();
const uploadingFile = require('../controller/uploadingFile.controller');

const upload = require('../middleware/multer.middleware');

Router.route('/upload').post(
    upload.fields([{
        name:'photo',
        maxCount:1
    }]),
    uploadingFile
    )

module.exports = Router