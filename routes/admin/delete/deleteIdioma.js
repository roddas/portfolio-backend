const express = require('express');
const { Idiomas } = require('../../../bin/databasesClasses/IdiomaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const idioma = new Idiomas();
        const {id} = request.params;
        await idioma.removeIdioma(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
