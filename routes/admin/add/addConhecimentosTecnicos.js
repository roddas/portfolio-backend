const express = require('express');
const { ConhecimentosTecnicos } = require('../../../bin/databasesClasses/ConhecimentosTecnicosClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const conhecimentosTecnicos = new ConhecimentosTecnicos();
        const {descricao} = request.body;
        await conhecimentosTecnicos.insertConhecimentosTecnicos(descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
