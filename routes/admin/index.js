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
        let projectosObj = new Projectos();
        let conhecimentosTecnicosObj = new ConhecimentosTecnicos();
        let contactosObj = new Contactos();
        let experienciaObj = new Experiencia();
        let linguagensFerramentasObj = new LinguagensFerramentas();
        let formacaoAcademicaObj = new FormacaoAcademica();
        let idiomasObj = new Idiomas();

        let title = 'Admin Page';
        let formacaoAcademica = await formacaoAcademicaObj.getFormacaoAcademica();
        let conhecimentosTecnicos = await conhecimentosTecnicosObj.getConhecimentosTecnicos();
        let contactos = await contactosObj.getContactos();
        let experiencia = await experienciaObj.getExperiencia();
        let idiomas = await idiomasObj.getIdiomas();
        let linguagensFerramentas = await linguagensFerramentasObj.getLinguagensFerramentas();
        let projectos = await projectosObj.getProjectos();
                
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