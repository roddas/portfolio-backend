const express = require('express');
const { Projectos } = require('../../bin/databasesClasses/autoloader');
const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
const { Contactos } = require('../../bin/databasesClasses/autoloader');
const { Experiencia } = require('../../bin/databasesClasses/autoloader');
const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
const { Idiomas } = require('../../bin/databasesClasses/autoloader');
const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');

var router = express.Router();

router.get('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        let projectos = new Projectos();
        let conhecimentosTecnicos = new ConhecimentosTecnicos();
        let contactos = new Contactos();
        let experiencia = new Experiencia();
        let linguagensFerramentas = new LinguagensFerramentas();
        let formacaoAcademica = new FormacaoAcademica();
        let idiomas = new Idiomas();

        let title = 'Admin Page';
        request.session.data = true;
        request.session.formacaoAcademica = await formacaoAcademica.getFormacaoAcademica();
        request.session.conhecimentosTecnicos = await conhecimentosTecnicos.getConhecimentosTecnicos();
        request.session.contactos = await contactos.getContactos();
        request.session.experiencia = await experiencia.getExperiencia();
        request.session.idiomas = await idiomas.getIdiomas();
        request.session.linguagensFerramentas = await linguagensFerramentas.getLinguagensFerramentas();
        request.session.projectos = await projectos.getProjectos();
        
        formacaoAcademica = request.session.formacaoAcademica;
        contactos = request.session.contactos;
        experiencia = request.session.experiencia;
        projectos = request.session.projectos;
        linguagensFerramentas = request.session.linguagensFerramentas;
        idiomas = request.session.idiomas;
        conhecimentosTecnicos = request.session.conhecimentosTecnicos;

        response.render('admin/index', {
            formacaoAcademica,
            conhecimentosTecnicos,
            contactos,
            experiencia,
            idiomas,
            linguagensFerramentas,
            projectos,
            title
        });
        
    }else
    {
        response.redirect('/');
    }
});

router.patch('/',async (request,response) =>{

    const descricao = request.body.descricao;
    const tabela = request.body.table;
    const id = request.body.idElement;

    const dataBase = new Database();
    console.log(descricao,tabela,id);
});

router.post('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const table = request.body.table; 
        const descricao = [request.body.descricao];
        const dataBase = new Database();
        dataBase.insertElement(table, descricao);
        response.redirect('/admin');
    }
    else
    {
        response.redirect('/');
    }
});

module.exports = router;