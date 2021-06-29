const express = require('express');
const {Database} = require('../../DatabaseClass');
const NodeCache = require('node-cache');

var router = express.Router();

router.get('/',async (request,response) =>{
    const nodeCache = new NodeCache();
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        var formacaoAcademica = undefined;
        var conhecimentosTecnicos = undefined;
        var contactos = undefined;
        var experiencia = undefined;
        var idiomas = undefined;
        var linguagensFerramentas = undefined;
        var projectos = undefined;

        if(nodeCache.keys() === [])
        {
            var dataBase = new Database();

            formacaoAcademica = await dataBase.getAllElements('formacao_academica');
            conhecimentosTecnicos = await dataBase.getAllElements('conhecimentos_tecnicos');
            contactos = await dataBase.getAllElements('	contactos');
            experiencia = await dataBase.getAllElements('experiencia');
            idiomas = await dataBase.getAllElements('idiomas');
            linguagensFerramentas = await dataBase.getAllElements('linguagens_ferramentas');
            projectos = await dataBase.getAllElements('projectos');
            
            console.log(contactos);
            
            // nodeCache.set('experiencia', experiencia);
            // nodeCache.set('conhecimentosTecnicos', conhecimentosTecnicos);
            // nodeCache.set('contactos', contactos);
            // nodeCache.set('idiomas', idiomas);
            // nodeCache.set('linguagensFerramentas', linguagensFerramentas);
            // nodeCache.set('projectos', projectos);
            // nodeCache.set('formacaoAcademica', formacaoAcademica);

        }else
        {
            experiencia = nodeCache.get('experiencia');
            conhecimentosTecnicos = nodeCache.get('conhecimentosTecnicos');
            contactos = nodeCache.get('contactos');
            idiomas = nodeCache.get('idiomas');
            linguagensFerramentas = nodeCache.get('linguagensFerramentas');
            projectos = nodeCache.get('projectos');
            formacaoAcademica = nodeCache.get('formacaoAcademica');
        }
        let title = 'Admin Page';
        console.log(nodeCache.keys());

        /*
        
        let title = 'Admin Page';

        
        response.render('admin/index',{
            formacaoAcademica,
            conhecimentosTecnicos,
            contactos,
            experiencia,
            idiomas,
            linguagensFerramentas,
            projectos,
            title
        });
        */
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;