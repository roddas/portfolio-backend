const express = require('express');

var router = express.Router();
var tableClass = new Map();

tableClass.set('conhecimentos_tecnicos', async (idElement)=>
{
    const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    await conhecimentosTecnicos.removeConhecimentosTecnicos(idElement);
});
tableClass.set('contactos', async (idElement)=>{
    const { Contactos } = require('../../bin/databasesClasses/autoloader');
    let contactos = new Contactos();
    await contactos.removeContacto(idElement);
});

tableClass.set('experiencia', async (idElement) =>{
    const { Experiencia } = require('../../bin/databasesClasses/autoloader');
    let experiencia = new Experiencia();
    await experiencia.removeExperiencia(idElement);
});
tableClass.set('formacao_academica', async (idElement) =>{
    const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
    let formacaoAcademica = new FormacaoAcademica();
    await formacaoAcademica.removeFormacaoAcademica(idElement);
});
tableClass.set('idiomas', async (idElement) =>{
    const { Idiomas } = require('../../bin/databasesClasses/autoloader');
    const idiomas = new Idiomas();
    idiomas.removeIdioma(idElement);
});
tableClass.set('linguagens_ferramentas', async (idElement) =>{
    const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');
    let linguagensFerramentas = new LinguagensFerramentas();
    await linguagensFerramentas.removeLinguagemFerramenta(idElement);
});
tableClass.set('projectos', async (idElement)=>{
    const { Projectos } = require('../../bin/databasesClasses/autoloader');
    let projectos = new Projectos();
    await projectos.removProjecto(idElement);
});

router.get('/:table/:id', async (request, response) => {
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2))
    {
        const { table, id } = request.params;
        let objectClass = tableClass.get(table);
        if (objectClass === undefined)
        {
            response.redirect('/');
        }
        await objectClass(id);
        response.redirect('/admin');
    }
    else 
    {
        response.redirect('/');
    }
});
router.post('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        const { idElement, table } = request.body;
        let objectClass = tableClass.get(table);
        let result = {};
        if (objectClass === undefined)
        {
            response.redirect('/');
        }
        await objectClass(idElement);
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;