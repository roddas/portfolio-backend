const express = require('express');
const { LinguagensFerramentas } = require('../../../bin/databasesClasses/LinguagensFerramentasClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const linguagensFerramentas = new LinguagensFerramentas();
        const {id} = request.params;
        const data = await linguagensFerramentas.getLinguagemFerramentaById(id);
        response.render('admin/edit/linguagensFerramentas',{data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) {
        const linguagensFerramentas = new LinguagensFerramentas();
        const { id, descricao } = request.body;
        response.json(request.files);
        //await linguagensFerramentas.updateLinguagemFerramenta(id, descricao);
        //response.redirect('/admin');
    }
    else 
    {
        response.redirect('/');
    }
});

module.exports = router;
