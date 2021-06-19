const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        response.render('admin/index',{title : 'Admin Page'});
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;