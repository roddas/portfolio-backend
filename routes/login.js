const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{

   if(request.session.token !== undefined)
   {   
       response.render('login');   
    }else
   {
       response.redirect('/');
   }
});

router.post('/',(request,response) =>{
    
    const token = request.body.password;
    if(token === process.env.TOKEN2)
    {
        request.session.token += process.env.TOKEN2;
        response.redirect('/admin');
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;