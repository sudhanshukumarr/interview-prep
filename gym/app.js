require('dotenv').config();
const express = require('express');
const gymRouter = require('./routes/gymRouter')
const userRouter = require('./routes/usersRouter')
const planRouter = require('./routes/planRouter')
const membershipRouter = require('./routes/membershipRouter')
const paymentRouter = require('./routes/paymentRouter')

const app = express();
app.use(express.json())

app.use('/gym', gymRouter)
app.use('/user', userRouter)
app.use('/plans', planRouter)
app.use('/membership', membershipRouter)
app.use('/payments', paymentRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`GYM server listening on port ${PORT}`)
});  