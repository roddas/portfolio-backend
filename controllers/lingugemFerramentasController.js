const { LinguagensFerramentas } = require('../controllers/databasesClasses/autoloader');
const linguagensFerramentas = new LinguagensFerramentas();

exports.addLinguagemFerramenta = async (request, response) => {
    const { descricao } = request.body;
    await linguagensFerramentas.insertLinguagemFerramenta(descricao);
    response.redirect('/admin');
}
exports.removeLinguagemFerramenta = async (request, response) => {
    const { id } = request.params;
    await linguagensFerramentas.removeLinguagemFerramenta(id);
    response.redirect('/admin');
}
exports.updateLinguagemFerramenta = async (request, response) => {
    const { id } = request.params;
    const data = await linguagensFerramentas.getLinguagemFerramentaById(id);
    response.render('admin/edit/linguagensFerramentas', { data });
}