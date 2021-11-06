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

router.get('/:id', loginMiddleware, async (request, response) => {
    
    const {id} = request.params;
    let formacaoAcademica = new FormacaoAcademica();
    
    try
    {
        await formacaoAcademica.removeFormacaoAcademica(id);
        response.redirect("/admin");

    }catch(error)
    {

    }
    
});

module.exports = router;