const express = require('express');
const {Experiencia } = require('../../../bin/databasesClasses/ExperienciaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const experiencia = new Experiencia();
        const {id} = request.params;
        const data  = await experiencia.getExperienciaById(id);
        response.render('admin/edit/experiencia',{data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) 
    {
        const experiencia = new Experiencia();
        const { id, descricao } = request.body;
        console.log(descricao);
        await experiencia.updateExperiencia(id,descricao);
        response.redirect('/admin');
    }
    else 
    {
        response.redirect('/');
    }
});

module.exports = router;
