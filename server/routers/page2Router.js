const express = require('express');
const router = express.Router();

router.get('/', function getIndexPage(req, res)  {
    res.render('page2.pug', []);
});

module.exports = router;