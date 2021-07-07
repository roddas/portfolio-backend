const express = require('express');
const { Projectos } = require('../../../bin/databasesClasses/ProjectosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const projectos = new Projectos();
        const {id} = request.params;
        const data = await projectos.getProjectoById(id);
        response.render('admin/edit/projectos',{data});
    }
    else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) {
        
        const projectos = new Projectos();
        const { nome, descricao, estado, link, id} = request.body;
        await projectos.updateProjecto(nome,descricao,estado,link,id);
        response.redirect('/admin');
    }
    else {
        response.redirect('/');
    }
});

module.exports = router;
