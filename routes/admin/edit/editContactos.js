const express = require('express');
const {Contactos } = require('../../../bin/databasesClasses/ContactosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const contactos = new Contactos();
        const {id} = request.params;
        const data = await contactos.getContactosById(id);
        response.render('admin/edit/contactos',{data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) 
    {
        const contactos = new Contactos();
        const { id, descricao, tipo } = request.body;
        await contactos.updateContacto(id, tipo, descricao);
        response.redirect('/admin');
    }
    else {
        response.redirect('/');
    }
});

module.exports = router;
