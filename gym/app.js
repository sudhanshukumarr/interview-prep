
const express = require('express');
const gymRouter = require('./routes/gymRouter')
const userRouter = require('./routes/usersRouter')

const app = express();
app.use(express.json())
app.use('/gym', gymRouter)

app.use('/user', userRouter)

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`GYM server listening on port ${PORT}`)
});  