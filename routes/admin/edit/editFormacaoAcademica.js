const express = require('express');
const {FormacaoAcademica } = require('../../../bin/databasesClasses/FormacaoAcademicaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const formacaoAcademica = new FormacaoAcademica();
        const {id} = request.params;
        const data = await formacaoAcademica.getFormacaoAcademicaById(id);
        response.render('admin/edit/formacaoAcademica',{data});
    }
    else
    {
        response.redirect('/');
    }
});


router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) 
    {
        const formacaoAcademica = new FormacaoAcademica();
        const { id,descricao } = request.body;
        await formacaoAcademica.updateFormacaoAcademica(id,descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
