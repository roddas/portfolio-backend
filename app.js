const express = require('express');
const dotenv = require('dotenv').config();
const pug = require('pug');

const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/',require('./routes/me'));
app.use('/projects',require('./routes/projects'));
app.use('/portfolio',require('./routes/portfolio'));
app.use('/secret',require('./routes/secret'));
app.use('/login',require('./routes/login'));

app.use((request,response) =>{
    response.status(404).render("404");
});

app.listen(PORT,console.log(`The server is running at ${PORT}`));