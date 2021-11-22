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

const imageStorage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (request, file, cb) => {
        cb(null,Date.now()
            + path.extname(file.originalname))
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(request, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|svg|jpeg)$/)) {
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

router.post('/', loginMiddleware, imageUpload.single("imagem"), async (request, response,next) => {
    response.json({message : request.file});
});

module.exports = router;