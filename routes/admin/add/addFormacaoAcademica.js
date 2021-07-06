const express = require('express');
const {FormacaoAcademica } = require('../../../bin/databasesClasses/FormacaoAcademicaClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const formacaoAcademica = new FormacaoAcademica();
        const {descricao} = request.body;
        await formacaoAcademica.insertFormacaoAcademica(descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
