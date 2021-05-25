const express = require('express');
const pug = require('pug');
const app = express();

const PORT = 3000;

app.listen(PORT,console.log(`The server is running at ${PORT}`));