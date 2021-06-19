const express = require('express');

var router = express.Router();
function validateSession(request,response)
{
    const {sessions} = response;
   console.log(request.session);
}
router.get('/',validateSession,(request,response) =>{
   if(request.query.token === process.env.TOKEN)
   {
       response.cookie('token_id','token_secret');
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
        response.redirect('/admin?token='+token);
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;