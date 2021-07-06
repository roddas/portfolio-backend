const express = require('express');
const { Experiencia } = require('../../../bin/databasesClasses/ExperienciaClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const experiencia = new Experiencia();
        const {descricao} = request.body;
        await experiencia.insertExperiencia(descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
