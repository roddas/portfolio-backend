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
let formacaoAcademica = new FormacaoAcademica();

router.get('/:id', loginMiddleware, async (request, response) => {

    let data = await formacaoAcademica.getFormacaoAcademicaById(request.params['id']);
    response.render('admin/update/updateFormacaoAcademicaView',{data});
});

router.post('/', loginMiddleware, async (request, response) => {

    const { id, descricao } = request.body;
    try
    {
        await formacaoAcademica.updateFormacaoAcademica(id,descricao);
        response.json({ status: 201, message: "Dado atualizado com sucesso !" });

    } catch (error)
    {
        response.json({ status: 500, message: "Erro ao atualizar o dado !" });
    }

});
module.exports = router;