const express = require('express');

var router = express.Router();
var tableClass = new Map();

tableClass.set('conhecimentos_tecnicos', async (descricao)=>
{
    const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/autoloader');
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    await conhecimentosTecnicos.insertConhecimentosTecnicos(descricao);
});
tableClass.set('contactos', async (tipo,descricao)=>{
    const { Contactos } = require('../../bin/databasesClasses/autoloader');
    let contactos = new Contactos();
    await contactos.insertContacto(tipo,descricao);
});

tableClass.set('experiencia', async (descricao) =>{
    const { Experiencia } = require('../../bin/databasesClasses/autoloader');
    let experiencia = new Experiencia();
    await experiencia.insertExperiencia(descricao);
});
tableClass.set('formacao_academica', async (descricao) =>{
    const { FormacaoAcademica } = require('../../bin/databasesClasses/autoloader');
    let formacaoAcademica = new FormacaoAcademica();
    await formacaoAcademica.insertFormacaoAcademica(descricao);
});
tableClass.set('idiomas', async (descricao) =>{
    const { Idiomas } = require('../../bin/databasesClasses/autoloader');
    const idiomas = new Idiomas();
    idiomas.insertIdioma(descricao);
});
tableClass.set('linguagens_ferramentas', async (descricao) =>{
    const { LinguagensFerramentas } = require('../../bin/databasesClasses/autoloader');
    let linguagensFerramentas = new LinguagensFerramentas();
    await linguagensFerramentas.insertLinguagemFerramenta(descricao);
});
tableClass.set('projectos', async (nome, descricao, estado, link)=>{
    const { Projectos } = require('../../bin/databasesClasses/autoloader');
    let projectos = new Projectos();
    await projectos.insertProjecto(nome,descricao,estado,link);
});

router.post('/',async (request,response) =>{
    if (request.session.token === (process.env.TOKEN + process.env.TOKEN2) )
    {
        const { nome, descricao, estado, link, table } = request.body;
        let objectClass = tableClass.get(table);
        let result = {};
        if (objectClass === undefined) 
        {
            response.redirect('/');
        }
        try 
        {
            if (table !== 'projectos') 
            {
                await objectClass(descricao);
            }
            else
            {
                await objectClass(nome, descricao, estado, link, idElement);
            }
            result.message = 'Dado inserido com sucesso :-D';
        }
        catch (e)
        {
            result.message = 'Erro na inserção do dado.!\n Por favor tente mais tarde';
        }
        response.json(result);
    }else
    {
        response.redirect('/');
    }
});

module.exports = router;

/*

*/