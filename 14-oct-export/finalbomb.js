const express = require('express');

const app = express()

var {returnAges, insertAge, upadateAges, deleteLastAge} = require('../crud-operation=/resource')

app.get('', (req, res) => {
    const data = returnAges();
    res.json({
        data:data
    })
})
app.post('', (req, res) => {
    const insertedAge = insertAge(34);
    res.json({
        data: insertedAge
    })
})
app.put('', (req, res) => {
    const modifiedAge = upadateAges(1, 69);
    res.json({
        data: modifiedAge
    })
})
app.delete('', (req, res) => {
    const deletedAge = deleteLastAge();
    res.json({
        data: deletedAge
    })
})
app.listen(4000);