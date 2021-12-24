/**
 * 
 * Rota para a inserção de um elemento da tabela de conhecimentos tecnicos
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */
const express = require('express');
let router = express.Router();
let {
    addFormacaoAcademica,
    removeFormacaoAcademica,
    updateFormacaoAcademica
} = require('../../controllers/admin/formacaoAcademicaController');

const loginMiddleware = require('../../middlewares/checkLogin');

router.post('/', loginMiddleware, addFormacaoAcademica);
router.delete('/:id', loginMiddleware, removeFormacaoAcademica);
router.patch('/:id', loginMiddleware, updateFormacaoAcademica);

module.exports = router;