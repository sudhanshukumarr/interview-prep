const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log('logging');
    next();
})

app.use(function(req,res,next){
    console.log('authenticating');
    next();
})

const arr = [{
    id :1,
    name:"sudhanshu",},
    {
        id:2,
        name:"kumar",}
]

app.get('/',(req,res) => {
    res.status(200).json({
        message : 'data fetched successfully',
        data : arr ,
    });
app.get('/api/:id', (req,res) => {
    let id = req.params.id;
    let data = arr.find((x) =>{ return x.id == id});

    if(!data){
        res.status(404).json({
        message : 'data not found',
    })
    }else{
        res.status(200).json({
            message : 'data fetched',
            data : data ,
        })
    }



});



})






app.listen(3000)