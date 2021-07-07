const express = require('express');
const { Projectos } = require('../../../bin/databasesClasses/ProjectosClass');

var router = express.Router();

router.get('/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const projectos = new Projectos();
        const {id} = request.params;
        await projectos.removeProjecto(id);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;
