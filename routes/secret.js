const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    response.render('secret');
});

router.post('/',(request,response) =>{
    const token = request.body.token;
    if(token === process.env.TOKEN)
    {
        response.redirect('/login?token='+token);
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;