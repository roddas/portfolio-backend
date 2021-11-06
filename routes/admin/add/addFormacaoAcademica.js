/**
 * 
 * Rota para a inserção de um elemento da tabela de conhecimentos tecnicos
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */
const express = require('express');
const { FormacaoAcademica } = require("../../../models/FormacaoAcademicaModel");
var router = express.Router();

const loginMiddleware = require('../../../middlewares/checkLogin');

router.post('/', loginMiddleware, async (request, response) => {
    
    const {descricao} = request.body;
    let formacaoAcademica = new FormacaoAcademica();
    
    try
    {
        await formacaoAcademica.insertFormacaoAcademica(descricao);
        response.json({status : 201,message : "Sucesso !"});

    }catch(error)
    {

    }
    
});

module.exports = router;