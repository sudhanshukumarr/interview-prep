const express = require('express');

const app = express()

const db= {456: 'Yatan'}
app.use((req, res,next) => {
    const userName = db[req.headers.auth];
    if (userName) {
        req.userName = userName;
        next()
    } else {
        res.status(401).send();
    }
})

app.use((req, res,next) => {
    console.log('chala2')
    next()
})

app.get('/cow', (req, res, next) => {
    console.log('reached 1')
    res.json({hi: req.userName})
    // next()
})
app.get('', (req, res, next) => {
    console.log('reached 2')
    // res.json({bye: 'world'})
    next()

})
app.get('shops', (req, res, next) => {
    console.log('reached 3')
    // res.json({bye: 'world'})
    next()
})
app.get('shops/:id', (req, res, next) => {
    console.log('reached 4')
    res.json({bye: 'world'})
})

app.listen(3000);