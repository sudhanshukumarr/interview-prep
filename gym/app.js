
const express = require('express');
const gymRouter = require('./routes/gymRouter')

const app = express();

app.use('/gym', gymRouter)

app.listen(3000);