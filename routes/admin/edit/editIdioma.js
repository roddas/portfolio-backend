const express = require('express');
const { Idiomas } = require('../../../bin/databasesClasses/IdiomaClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const idioma = new Idiomas();
        const {id} = request.params;
        const data = await idioma.getIdiomaById(id);
        response.render('admin/edit/idiomas',{data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) 
    {
        const idioma = new Idiomas();
        const { id, descricao } = request.body;
        await idioma.updateIdioma(id, descricao);
        response.redirect('/admin');
    }
    else {
        response.redirect('/');
    }
});

module.exports = router;
