import express from 'express';
import session from 'express-session';
import multer from "multer";
import path from 'path';
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const SERVER_URL = `http://localhost:${PORT}`;

app.set('view engine', 'pug');
app.use(session({
    secret : 'chave',
    maxAge : 1000 * 60 * 60,
    resave : true,
    saveUninitialized : false
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/projects',require('./routes/projects'));
app.use('/portfolio',require('./routes/portfolio'));
app.use('/secret',require('./routes/secret'));
app.use('/login',require('./routes/login'));
app.use('/admin', require('./routes/admin/index'));
app.use('/logout', require('./routes/admin/logout'));

app.use((request, response) => { response.status(404).json({status : 404,message : 'Are you lost ?'}) });

app.listen(PORT, '0.0.0.0', console.log(`The server is running at ${SERVER_URL}`));