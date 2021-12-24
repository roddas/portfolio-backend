const { FormacaoAcademica } = require('../controllers/databasesClasses/autoloader');
const formacaoAcademica = new FormacaoAcademica();

exports.addFormacaoAcademica = async (request, response) => {
        try
        {
                const { descricao } = request.body;
                await formacaoAcademica.insertFormacaoAcademica(descricao);
                response.redirect('/admin');
        }catch(error)
        {
                response.status(500).json({ status: 500, message: "Internal Server Error" });
                console.log(error);
        }
}
exports.removeFormacaoAcademica = async (request, response) => {
       try
       {
               const { id } = request.params;
               await formacaoAcademica.removeFormacaoAcademica(id);
               response.redirect('/admin');
       }catch(error)
       {
               response.status(500).json({ status: 500, message: "Internal Server Error" });
               console.log(error);
       }
}
exports.updateFormacaoAcademica = async (request, response) => {
        try
        {
                const { id, descricao } = request.params;
                const data = await formacaoAcademica.updateFormacaoAcademica(id, descricao);
                response.render('admin/edit/formacaoAcademica', { data });
        }catch(error)
        {
                response.status(500).json({ status: 500, message: "Internal Server Error" });
                console.log(error);
        }
}