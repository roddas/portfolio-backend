const express = require('express');
const { LinguagensFerramentas } = require('../../../bin/databasesClasses/LinguagensFerramentasClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const linguagensFerramentas = new LinguagensFerramentas();
        const {id} = request.params;
        await linguagensFerramentas.removeLinguagemFerramenta(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
