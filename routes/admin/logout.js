const express = require('express');

var router = express.Router();

router.get('/',(request,response) =>{
    if (request.session.token !== undefined )
    {
        request.session.destroy();
    }
    response.redirect('/');
});

module.exports = router;