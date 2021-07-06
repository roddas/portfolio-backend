const express = require('express');
const { LinguagensFerramentas } = require('../../../bin/databasesClasses/LinguagensFerramentasClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const linguagensFerramentas = new LinguagensFerramentas();
        const {descricao} = request.body;
        await linguagensFerramentas.insertLinguagemFerramenta(descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
