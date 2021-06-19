const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    if(request.query.token === process.env.TOKEN2 )
    {
        response.render('admin/index');
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;