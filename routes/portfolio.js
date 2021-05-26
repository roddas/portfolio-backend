const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    response.render('portfolio');
});

module.exports = router;