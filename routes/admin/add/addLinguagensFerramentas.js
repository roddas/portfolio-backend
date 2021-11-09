/**
 * 
 * Rota para a inserção de um elemento da tabela de linguagens e Ferramentas
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */
const express = require('express');
const { LinguagensFerramentas } = require("../../../models/LinguagensFerramentasModel");
var router = express.Router();

const loginMiddleware = require('../../../middlewares/checkLogin');

router.post('/', loginMiddleware, async (request, response) => {
    
    const {descricao} = request.body;
    let linguagensFerramentas = new LinguagensFerramentas();
    
    try
    {
        await linguagensFerramentas.insertLinguagemFerramenta(descricao);
        response.json({ status: 201, message: "Dado inserido com sucesso !" });

    }catch(error)
    {
        response.json({ status: 500, message: "Erro ao cadastrar !" });
    }
});

module.exports = router;