const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
   if(request.query.token === process.env.token)
   {
       response.render('login');
   }else
   {
       response.redirect('/');
   }
});


module.exports = router;