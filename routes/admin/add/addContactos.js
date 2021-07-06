const express = require('express');
const { Contactos } = require('../../../bin/databasesClasses/ContactosClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const contactos = new Contactos();
        const { tipo,descricao } = request.body;
        await contactos.insertContacto(tipo,descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
