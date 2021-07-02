const { Projectos } = require('../../bin/databasesClasses/ProjectosClass');
const { ConhecimentosTecnicos } = require('../../bin/databasesClasses/ConhecimentosTecnicosClass');
const { Contactos } = require('../../bin/databasesClasses/ContactosClass');
const { Experiencia } = require('../../bin/databasesClasses/ExperienciaClass');
const { FormacaoAcademica } = require('../../bin/databasesClasses/FormacaoAcademicaClass');
const { Idiomas } = require('../../bin/databasesClasses/IdiomaClass');
const { LinguagensFerramentas } = require('../../bin/databasesClasses/LinguagensFerramentasClass');

module.exports = { 
    Projectos, 
    ConhecimentosTecnicos, 
    Contactos, 
    Experiencia, 
    FormacaoAcademica,
    Idiomas,
    LinguagensFerramentas
}