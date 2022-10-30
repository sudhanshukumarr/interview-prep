const express = require('express');
const app = express()

const arr = [1,2,3]

app.get('/',(req,res) => {
    res.status(200).json({
        message : 'data fetched successfully',
        data : arr,
    })
})

app.post('/', (req,res) =>{
    const insertedAge =  arr.push(9);
    res.status(200).json({
         data : insertedAge ,
    })
})

app.listen(7000);