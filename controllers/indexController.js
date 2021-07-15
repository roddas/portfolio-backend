const autoloader = '../controllers/databasesClasses/autoloader';
const { Projectos } = require(autoloader);
const { ConhecimentosTecnicos } = require(autoloader);
const { Contactos } = require(autoloader);
const { Experiencia } = require(autoloader);
const { FormacaoAcademica } = require(autoloader);
const { Idiomas } = require(autoloader);
const { LinguagensFerramentas } = require(autoloader);

exports.renderIndex = async (request, response) => 
{
    let projectos = new Projectos();
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    let contactos = new Contactos();
    let experiencia = new Experiencia();
    let linguagensFerramentas = new LinguagensFerramentas();
    let formacaoAcademica = new FormacaoAcademica();
    let idiomas = new Idiomas();
    let title = 'Admin Page';
    
    request.session.data = true;
    request.session.formacaoAcademica = await formacaoAcademica.getFormacaoAcademica();
    request.session.conhecimentosTecnicos = await conhecimentosTecnicos.getConhecimentosTecnicos();
    request.session.contactos = await contactos.getContactos();
    request.session.experiencia = await experiencia.getExperiencia();
    request.session.idiomas = await idiomas.getIdiomas();
    request.session.linguagensFerramentas = await linguagensFerramentas.getLinguagensFerramentas();
    request.session.projectos = await projectos.getProjectos();

    formacaoAcademica = request.session.formacaoAcademica;
    contactos = request.session.contactos;
    experiencia = request.session.experiencia;
    projectos = request.session.projectos;
    linguagensFerramentas = request.session.linguagensFerramentas;
    idiomas = request.session.idiomas;
    conhecimentosTecnicos = request.session.conhecimentosTecnicos;

    response.render('admin/index', {
        formacaoAcademica,
        conhecimentosTecnicos,
        contactos,
        experiencia,
        idiomas,
        linguagensFerramentas,
        projectos,
        title
    });
}
