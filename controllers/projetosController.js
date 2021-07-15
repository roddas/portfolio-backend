const { Projectos } = require('../controllers/databasesClasses/autoloader');
const projectos = new Projectos();

exports.addProjecto = async (request, response) => {
    const { nome, descricao, estado, link } = request.body;
    await projectos.insertProjecto(nome, descricao, estado, link);
    response.redirect('/admin');
}
exports.removeProjecto = async (request, response) => {
    const { id } = request.params;
    await projectos.removeProjecto(id);
    response.redirect('/admin');
}
exports.updateProjecto = async (request, response) => {
    const { id } = request.params;
    const data = await projectos.getProjectoById(id);
    response.render('admin/edit/projectos', { data });
}