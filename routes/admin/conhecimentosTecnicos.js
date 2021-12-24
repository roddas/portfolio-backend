/**
 * 
 * Rota para ao CRUD da tabela de conhecimentos tecnicos
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */

const express = require('express');
const {
    addConhecimentosTecnicos,
    removeConhecimentosTecnicos,
    updateConhecimentosTecnicos} = require('../../controllers/admin/conhecimentosTecnicosController');
let router = express.Router();

const loginMiddleware = require('../../middlewares/checkLogin');

router.get('/', loginMiddleware, async (request, response) => {
    response.render('admin/conhecimentosTecnicosView');
});

router.post('/', loginMiddleware,addConhecimentosTecnicos );
router.delete('/:id',loginMiddleware,removeConhecimentosTecnicos);
router.patch('/:id',loginMiddleware,updateConhecimentosTecnicos);

module.exports = router;