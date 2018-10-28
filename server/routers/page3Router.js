const express = require('express');
const router = express.Router();

router.get('/', function getIndexPage(req, res)  {
    res.render('page3.pug', []);
});

module.exports = router;