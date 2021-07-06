const express = require('express');
const { Projectos } = require('../../../bin/databasesClasses/ProjectosClass');

var router = express.Router();

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const projectos = new Projectos();
        const { nome, descricao, estado, link } = request.body;
        await projectos.insertProjecto(nome,descricao,estado,link);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
