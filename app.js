const express = require('express');
const dotenv = require('dotenv').config();
const session = require('express-session');

const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
    secret : 'chave',
    maxAge : 1000 * 60 * 60,
    resave : true,
    saveUninitialized : false
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/',require('./routes/me'));
app.use('/projects',require('./routes/projects'));
app.use('/portfolio',require('./routes/portfolio'));
app.use('/secret',require('./routes/secret'));
app.use('/login',require('./routes/login'));
app.use('/admin', require('./routes/admin/index'));
app.use('/logout', require('./routes/admin/logout'));
/*

//  Add routes
let prefix = '/add/add';
app.use('/admin'+prefix+'FormacaoAcademica', require('./routes/admin'+prefix+'FormacaoAcademica'));
app.use('/admin'+prefix+'Contactos', require('./routes/admin'+prefix+'Contactos'));
app.use('/admin'+prefix+'Experiencia', require('./routes/admin'+prefix+'Experiencia'));
app.use('/admin'+prefix+'ConhecimentosTecnicos', require('./routes/admin'+prefix+'ConhecimentosTecnicos'));
app.use('/admin' + prefix + 'Idioma', require('./routes/admin' + prefix + 'Idioma'));
app.use('/admin' + prefix + 'Projectos', require('./routes/admin' + prefix + 'Projectos'));
app.use('/admin' + prefix + 'LinguagensFerramentas', require('./routes/admin' + prefix +'LinguagensFerramentas'));

// Delete routes
prefix = '/delete/delete';
app.use('/admin' + prefix + 'FormacaoAcademica', require('./routes/admin' + prefix + 'FormacaoAcademica'));
app.use('/admin' + prefix + 'Contactos', require('./routes/admin' + prefix + 'Contactos'));
app.use('/admin' + prefix + 'Experiencia', require('./routes/admin' + prefix + 'Experiencia'));
app.use('/admin' + prefix + 'ConhecimentosTecnicos', require('./routes/admin' + prefix + 'ConhecimentosTecnicos'));
app.use('/admin' + prefix + 'Idioma', require('./routes/admin' + prefix + 'Idioma'));
app.use('/admin' + prefix + 'Projectos', require('./routes/admin' + prefix + 'Projectos'));
app.use('/admin' + prefix + 'LinguagensFerramentas', require('./routes/admin' + prefix + 'LinguagensFerramentas'));

// Edit routes
prefix = '/edit/edit';
app.use('/admin' + prefix + 'FormacaoAcademica', require('./routes/admin' + prefix + 'FormacaoAcademica'));
app.use('/admin' + prefix + 'Contactos', require('./routes/admin' + prefix + 'Contactos'));
app.use('/admin' + prefix + 'Experiencia', require('./routes/admin' + prefix + 'Experiencia'));
app.use('/admin' + prefix + 'ConhecimentosTecnicos', require('./routes/admin' + prefix + 'ConhecimentosTecnicos'));
app.use('/admin' + prefix + 'Idioma', require('./routes/admin' + prefix + 'Idioma'));
app.use('/admin' + prefix + 'Projectos', require('./routes/admin' + prefix + 'Projectos'));
app.use('/admin' + prefix + 'LinguagensFerramentas', require('./routes/admin' + prefix + 'LinguagensFerramentas'));

*/
app.use((request,response) =>{
    response.status(404).render("404");
});

app.listen(PORT,console.log(`The server is running at ${PORT}`));