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
app.use('/admin/edit', require('./routes/admin/edit'));
app.use('/admin/delete', require('./routes/admin/delete'));
app.use('/admin/add', require('./routes/admin/add'));


app.use((request,response) =>{
    response.status(404).render("404");
});

app.listen(PORT,console.log(`The server is running at ${PORT}`));