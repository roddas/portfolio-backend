const express = require('express');
const {Experiencia } = require('../../../bin/databasesClasses/ExperienciaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const experiencia = new Experiencia();
        const {id} = request.params;
        await experiencia.removeExperiencia(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
