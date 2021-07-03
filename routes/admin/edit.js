const express = require('express');

var router = express.Router();
var tableClass = new Map();

tableClass.set('conhecimentos_tecnicos', async (idElement, descricao)=>
{
    const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    await conhecimentosTecnicos.updateFormacaoAcademica(idElement, descricao);
});
tableClass.set('contactos', async (idElement, descricao)=>{
    const { Contactos } = require('../../bin/databasesClasses/autoloader');
    let contactos = new Contactos();
    await contactos.updateContacto(idElement,descricao);
});

tableClass.set('experiencia', async (idElement,descricao) =>{
    const { Experiencia } = require('../../bin/databasesClasses/autoloader');
    let experiencia = new Experiencia();
    await experiencia.updateExperiencia(idElement,descricao);
});
tableClass.set('formacao_academica', async (idElement,descricao) =>{
    const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
    let formacaoAcademica = new FormacaoAcademica();
    await formacaoAcademica.updateFormacaoAcademica(idElement,descricao);
});
tableClass.set('idiomas', async (idElement,descricao) =>{
    const { Idiomas } = require('../../bin/databasesClasses/autoloader');
    const idiomas = new Idiomas();
    idiomas.updateIdioma(idElement,descricao);
});
tableClass.set('linguagens_ferramentas', async (idElement,descricao) =>{
    const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');
    let linguagensFerramentas = new LinguagensFerramentas();
    await linguagensFerramentas.updateLinguagemFerramenta(idElement,descricao);
});
tableClass.set('projectos', async (nome, descricao, estado, link, idElement)=>{
    const { Projectos } = require('../../bin/databasesClasses/autoloader');
    let projectos = new Projectos();
    await projectos.updateProjecto(nome,descricao,estado,link,idElement);
});

router.get('/:table/:id',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        const {table,id} = request.params;
        if(table.length === 0 || id.length === 0)
        {
            response.redirect('/');
        }
        response.render('edit',{table});
    }else
    {
        response.redirect('/');
    }
});
router.get('/:table/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2)) {
        const { nome, descricao, estado, link, idElement, table } = request.body;
        let objectClass = tableClass.get(table);
        if (objectClass === undefined) {
            response.redirect('/');
        }
        if (table !== 'projectos') {
            await objectClass(idElement, descricao);
        } else {
            await objectClass(nome, descricao, estado, link, idElement);
        }
        response.json(result);
    } else {
        response.redirect('/');
    }
});

module.exports = router;