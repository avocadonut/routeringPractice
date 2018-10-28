const express = require('express');
const router = express.Router();

router.get('/', function getIndexPage(req, res)  {
    res.render('index.pug', []);
});
module.exports = router;