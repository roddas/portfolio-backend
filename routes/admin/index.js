const express = require('express');
const {Database} = require('../../DatabaseClass');
const NodeCache = require('node-cache');

var router = express.Router();

router.get('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        const dataBase = new Database();
        let title = 'Admin Page';
        if(request.session.data === undefined)
        {
            request.session.data = true;
            request.session.formacaoAcademica = await dataBase.getAllElements('formacao_academica');
            request.session.conhecimentosTecnicos = await dataBase.getAllElements('conhecimentos_tecnicos');
            request.session.contactos = await dataBase.getAllElements('	contactos');
            request.session.experiencia = await dataBase.getAllElements('experiencia');
            request.session.idiomas = await dataBase.getAllElements('idiomas');
            request.session.linguagensFerramentas = await dataBase.getAllElements('linguagens_ferramentas');
            request.session.projectos = await dataBase.getAllElements('projectos');
        }
        let formacaoAcademica = request.session.formacaoAcademica;
        let conhecimentosTecnicos = request.session.formacaoAcademica;
        let contactos = request.session.contactos;
        let experiencia = request.session.experiencia;
        let idiomas = request.session.idiomas;
        let linguagensFerramentas = request.session.linguagensFerramentas;
        let projectos = request.session.projectos;
        
        //console.log(formacaoAcademica);
        
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

router.get('/', async (request, response) => {
    const { tabela } = request.query;
    const { id } = request.query;
    response.json(tabela,id);
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