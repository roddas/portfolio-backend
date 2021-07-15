const { ConhecimentosTecnicos } = require('../controllers/databasesClasses/autoloader');
const conhecimentosTecnicos = new ConhecimentosTecnicos();

exports.addConhecimentosTecnicos = async (request, response) => {
    const { descricao } = request.body;
    await conhecimentosTecnicos.insertConhecimentosTecnicos(descricao);
    response.redirect('/admin');
}

exports.removeConhecimentosTecnicos = async (request, response) => {
    const { id } = request.params;
    await conhecimentosTecnicos.removeConhecimentosTecnicos(id);
    response.redirect('/admin');
}
exports.updateConhecimentosTecnicos = async (request, response) => {
    const { id, descricao } = request.body;
    await conhecimentosTecnicos.updateConhecimentosTecnicos(id, descricao);
    response.redirect('/admin');
}