const { ConhecimentosTecnicos } = require('../controllers/databasesClasses/autoloader');
const conhecimentosTecnicos = new ConhecimentosTecnicos();

exports.addConhecimentosTecnicos = async (request, response) => {
    const { descricao_conhecimento } = request.body;
    let conhecimentosTecnicos = new ConhecimentosTecnicos();
    try
    {
        await conhecimentosTecnicos.insertConhecimentosTecnicos(descricao_conhecimento);
        response.redirect("/admin");

    } catch (error) {
        response.status(500).json({ status: 500, message: "Internal Server Error" });
        console.error(error);
    }
}

exports.removeConhecimentosTecnicos = async (request, response) => {
    try
    {
        const { id } = request.params;
        await conhecimentosTecnicos.removeConhecimentosTecnicos(id);
        response.redirect('/admin');
    }
    catch (error)
    {
        response.status(500).json({ status: 500, message: "Internal Server Error" });
        console.error(error);
    }
}
exports.updateConhecimentosTecnicos = async (request, response) => {
    try
    {
        const { id, descricao } = request.body;
        await conhecimentosTecnicos.updateConhecimentosTecnicos(id, descricao);
        response.redirect('/admin');
    }catch(error)
    {
        response.status(500).json({ status: 500, message: "Internal Server Error" });
        console.error(error);
    }
}