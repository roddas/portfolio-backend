const { Contactos } = require('../controllers/databasesClasses/autoloader');
const contactos = new ConhecimentosTecnicos();

exports.addContactos = async (request, response) => {
        const { tipo, descricao } = request.body;
        await contactos.insertContacto(tipo, descricao);
        response.redirect('/admin');
}
exports.removeContacto = async (request, response) => {
        const { id } = request.params;
        await contactos.removeContacto(id);
        response.redirect('/admin');

}
exports.updateContactos = async (request, response) => {
        const { id, descricao, tipo } = request.body;
        await contactos.updateContacto(id, tipo, descricao);
        response.redirect('/admin');
}