const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    if(request.session.token !== undefined)
    {
        if (request.session.token === process.env.TOKEN)
        {
            response.redirect('/login');
        } else if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
        {
            response.redirect('/admin');
        }
    }
    response.render('secret');
});

router.post('/',(request,response) =>{
    const token = request.body.token;

    if(token === process.env.TOKEN)
    {
        request.session.token = process.env.TOKEN;
        response.redirect('/login');
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;