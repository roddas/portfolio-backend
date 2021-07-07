const express = require('express');
const { ConhecimentosTecnicos } = require('../../../bin/databasesClasses/ConhecimentosTecnicosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const conhecimentosTecnicos = new ConhecimentosTecnicos();
        const {id} = request.params;
        const data = await conhecimentosTecnicos.getConhecimentosTecnicosById(id);
        response.render('admin/edit/conhecimentosTecnicos', {data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) 
    {
        const conhecimentosTecnicos = new ConhecimentosTecnicos();
        const { id, descricao } = request.body;
        await conhecimentosTecnicos.updateConhecimentosTecnicos(id,descricao);
        response.redirect('/admin');
    }
    else 
    {
        response.redirect('/');
    }
});
module.exports = router;
