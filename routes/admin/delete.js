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
        try
        {
            await objectClass(idElement);
            result.message = 'Dado eliminado com sucesso :-D';
        }catch(e)
        {
            result.message = 'Erro na actualização do dado.!\n Por favor tente mais tarde';
        }
        response.json(result);
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;