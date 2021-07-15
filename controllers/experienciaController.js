const { Experiencia } = require('../controllers/databasesClasses/autoloader');
const experiencia = new Experiencia();

exports.addExperiencia = async (request, response) => {
        const { descricao } = request.body;
        await experiencia.insertExperiencia(descricao);
        response.redirect('/admin');
}
exports.removeExperiencia = async (request, response) => {
        const { id } = request.params;
        await experiencia.removeExperiencia(id);
        response.redirect('/admin');
}
exports.updateExperiencia = async (request, response) => {
        const { id, descricao } = request.body;
        await experiencia.updateExperiencia(id, descricao);
        response.redirect('/admin');
}