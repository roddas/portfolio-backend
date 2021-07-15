const { FormacaoAcademica } = require('../controllers/databasesClasses/autoloader');
const formacaoAcademica = new FormacaoAcademica();

exports.addFormacaoAcademica = async (request, response) => {
        const { descricao } = request.body;
        await formacaoAcademica.insertFormacaoAcademica(descricao);
        response.redirect('/admin');
}
exports.removeFormacaoAcademica = async (request, response) => {
        const { id } = request.params;
        await formacaoAcademica.removeFormacaoAcademica(id);
        response.redirect('/admin');
}
exports.updateFormacaoAcademica = async (request, response) => {
        const { id,descricao } = request.params;
        const data = await formacaoAcademica.updateFormacaoAcademica(id,descricao);
        response.render('admin/edit/formacaoAcademica', { data });
}