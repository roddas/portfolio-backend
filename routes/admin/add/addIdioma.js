const express = require('express');
const { Idiomas } = require('../../../bin/databasesClasses/IdiomaClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const idioma = new Idiomas();
        const {descricao} = request.body;
        await idioma.insertIdioma(descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
