const { Projectos } = require('../databasesClasses/ProjectosClass');
const { ConhecimentosTecnicos } = require('../databasesClasses/ConhecimentosTecnicosClass');
const { Contactos } = require('../databasesClasses/ContactosClass');
const { Experiencia } = require('../databasesClasses/ExperienciaClass');
const { FormacaoAcademica } = require('../databasesClasses/FormacaoAcademicaClass');
const { Idiomas } = require('../databasesClasses/IdiomaClass');
const { LinguagensFerramentas } = require('../databasesClasses/LinguagensFerramentasClass');

module.exports = { 
    Projectos, 
    ConhecimentosTecnicos, 
    Contactos, 
    Experiencia, 
    FormacaoAcademica,
    Idiomas,
    LinguagensFerramentas
}