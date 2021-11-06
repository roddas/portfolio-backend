/**
 * 
 * Rota para a inserção de um elemento da tabela de conhecimentos tecnicos
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */
const express = require('express');
const { ConhecimentosTecnicos } = require("../../../models/ConhecimentosTecnicosModel");
var router = express.Router();

const loginMiddleware = require('../../../middlewares/checkLogin');

router.get('/', loginMiddleware, async (request, response) => {
    response.render('admin/conhecimentosTecnicosView');
});

router.post('/', loginMiddleware, async (request, response) => {
    
    const {descricao_conhecimento} = request.body;
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    
    try
    {
        await conhecimentosTecnicos.insertConhecimentosTecnicos(descricao_conhecimento);
        response.json({status : 201,message : "Sucesso !"});

    }catch(error)
    {

    }
    
});

module.exports = router;