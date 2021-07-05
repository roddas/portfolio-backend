const express = require('express');

var router = express.Router();

router.get('/:table/:id',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        var tableClass = new Map();

        tableClass.set('conhecimentos_tecnicos', async (id) => {
            const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
            let conhecimentosTecnicos = new ConhecimentosTecnicos();
            await conhecimentosTecnicos.getConhecimentosTecnicosById(id);
        });
        tableClass.set('contactos', async (id) => {
            const { Contactos } = require('../../bin/databasesClasses/autoloader');
            let contactos = new Contactos();
            await contactos.getContactosById(id);
        });

        tableClass.set('experiencia', async (id) => {
            const { Experiencia } = require('../../bin/databasesClasses/autoloader');
            let experiencia = new Experiencia();
            await experiencia.getExperienciaById(id);
        });
        tableClass.set('formacao_academica', async (id) => {
            const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
            let formacaoAcademica = new FormacaoAcademica();
            await formacaoAcademica.getFormacaoAcademicaById(id);
        });
        tableClass.set('idiomas', async (id) => {
            const { Idiomas } = require('../../bin/databasesClasses/autoloader');
            const idiomas = new Idiomas();
            idiomas.getIdiomaById(id);
        });
        tableClass.set('linguagens_ferramentas', async (id,) => {
            const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');
            let linguagensFerramentas = new LinguagensFerramentas();
            await linguagensFerramentas.getLinguagemFerramentaById(id);
        });
        tableClass.set('projectos', async (id) => {
            const { Projectos } = require('../../bin/databasesClasses/autoloader');
            let projectos = new Projectos();
            await projectos.getProjectoById(id);
        });
        const { id, table } = request.params;
        let objectClass = tableClass.get(table);
        let data = await objectClass(id);
        request.session.table = table;
        response.render('admin/edit',{data});

    }else
    {
        response.redirect('/');
    }
});

router.post('/', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) {
        var tableClass = new Map();

        tableClass.set('conhecimentos_tecnicos', async (id,descricao) => {
            const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
            let conhecimentosTecnicos = new ConhecimentosTecnicos();
            await conhecimentosTecnicos.updateConhecimentosTecnicos(id, descricao);
        });
        tableClass.set('contactos', async (id,tipo,descricao) => {
            const { Contactos } = require('../../bin/databasesClasses/autoloader');
            let contactos = new Contactos();
            await contactos.updateContacto(id,tipo,descricao);
        });

        tableClass.set('experiencia', async (id,descricao) => {
            const { Experiencia } = require('../../bin/databasesClasses/autoloader');
            let experiencia = new Experiencia();
            await experiencia.updateExperiencia(id,descricao);
        });
        tableClass.set('formacao_academica', async (id, descricao) => {
            const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
            let formacaoAcademica = new FormacaoAcademica();
            await formacaoAcademica.updateFormacaoAcademica(id,descricao);
        });
        tableClass.set('idiomas', async (id,descricao) => {
            const { Idiomas } = require('../../bin/databasesClasses/autoloader');
            const idiomas = new Idiomas();
            idiomas.updateIdioma(id,descricao);
        });
        tableClass.set('linguagens_ferramentas', async (id,descricao) => {
            const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');
            let linguagensFerramentas = new LinguagensFerramentas();
            await linguagensFerramentas.updateLinguagemFerramenta(id,descricao);
        });
        tableClass.set('projectos', async (nome, descricao, estado, link, id) => {
            const { Projectos } = require('../../bin/databasesClasses/autoloader');
            let projectos = new Projectos();
            await projectos.updateProjecto(nome,descricao,estado,link,id);
        });
        const { id,nome, descricao, estado, link } = request.body;
        const table = request.session.table;
        console.log(table);
        
    } else {
        response.redirect('/');
    }
});

module.exports = router;