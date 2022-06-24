const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

router.get('/', API.getAllPictures);
router.post('/', API.createPicture);

module.exports = router;