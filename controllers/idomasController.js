const { Idiomas } = require('../controllers/databasesClasses/autoloader');
const idioma = new Idiomas();

exports.addIdiomas = async(request, response) => {
        const { descricao } = request.body;
        await idioma.insertIdioma(descricao);
        response.redirect('/admin');
}
exports.removeIdioma = async (request, response) => {
        const { id } = request.params;
        await idioma.removeIdioma(id);
        response.redirect('/admin');
}
exports.updateIdioma = async (request, response) => {
        const { id } = request.params;
        const data = await idioma.getIdiomaById(id);
        response.render('admin/edit/idiomas', { data });
}