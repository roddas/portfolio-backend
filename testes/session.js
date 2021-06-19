const express = require('express');
const {body,validationResult} = require('express-validator');
const expressSession = require('express-session');
const { request } = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(expressSession({
    secret              :   'max',
    saveUninitialized   :    false,
    resave              :   false
}));
app.use(express.urlencoded({extended : true}));

app.get('/',(request,response) =>{
    response.json({
        succcess : false,
        error : request.session.error
    });
    request.session.error = null;
});

app.post('/', 
    body('email','Insira um e-mail válido').isEmail(),
    body('password','Password incorreto!').isLength({min:2}).equals('123456'),
    (request,response) =>{
        const errors = validationResult(request);
        if(!errors.isEmpty())
        {
            return response.status(400).json(errors.array());
        }
});

app.listen(PORT,console.log(`The server is running at ${PORT}`));