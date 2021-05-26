const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    response.render('contacts');
});

module.exports = router;