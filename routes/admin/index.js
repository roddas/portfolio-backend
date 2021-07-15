const express = require('express');
var router = express.Router();

const { renderIndex } = require('../../controllers/indexController');
const loginMiddleware = require('../../middlewares/checkLogin');

router.get('/', loginMiddleware,renderIndex);

router.post('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const table = request.body.table; 
        const descricao = [request.body.descricao];
        const dataBase = new Database();
        dataBase.insertElement(table, descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;