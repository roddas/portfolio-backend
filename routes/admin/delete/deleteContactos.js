const express = require('express');
const {Contactos } = require('../../../bin/databasesClasses/ContactosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const contactos = new Contactos();
        const {id} = request.params;
        await contactos.removeContacto(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
