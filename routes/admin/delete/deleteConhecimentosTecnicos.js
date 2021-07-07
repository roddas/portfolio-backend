const express = require('express');
const { ConhecimentosTecnicos } = require('../../../bin/databasesClasses/ConhecimentosTecnicosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const conhecimentosTecnicos = new ConhecimentosTecnicos();
        const {id} = request.params;
        await conhecimentosTecnicos.removeConhecimentosTecnicos(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
