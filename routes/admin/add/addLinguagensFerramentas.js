/**
 * 
 * Rota para a inserção de um elemento da tabela de linguagens e Ferramentas
 * @author Rodolfo Cabral Neves
 * @link https://github.com/roddas/
 * 
 */
const express = require('express');
const { LinguagensFerramentas } = require("../../../models/LinguagensFerramentasModel");
const loginMiddleware = require('../../../middlewares/checkLogin');
const multer = require("multer");
const path = require("path");

let router = express.Router();

const DESTINATION = 'public/uploads';

const imageStorage = multer.diskStorage({
    destination: DESTINATION,
    filename: (request, file, cb) => {
        return cb(null,Date.now()
            + path.extname(file.originalname))
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 5000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(request, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|svg|jpeg)$/)) {
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

router.post('/', loginMiddleware, imageUpload.single("imagem"), async (request, response,next) => {
    const fileName = path.join(path.resolve(),DESTINATION, request.file.filename);
    
    let linguagensFerramentas = new LinguagensFerramentas();
    console.log(fileName);
    try
    {
        await linguagensFerramentas.insertLinguagemFerramenta(fileName);
        response.json({ message: "Upload feito com sucesso :-D" });
    }catch(error)
    {
        console.error(error);
    }

});

module.exports = router;