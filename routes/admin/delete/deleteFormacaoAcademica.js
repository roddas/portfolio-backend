const express = require('express');
const {FormacaoAcademica } = require('../../../bin/databasesClasses/FormacaoAcademicaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const formacaoAcademica = new FormacaoAcademica();
        const {id} = request.params;
        await formacaoAcademica.removeFormacaoAcademica(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
