const express = require('express');
const pug = require('pug');

const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

app.use('/',require('./routes/me'));
app.use((request,response) =>{
    response.status(404).render("404");
});

app.listen(PORT,console.log(`The server is running at ${PORT}`));