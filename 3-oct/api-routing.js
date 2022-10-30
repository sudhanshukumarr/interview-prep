const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('helloo world');               
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3]);
});
app.get('/api/post/:year/:month',(req,res) =>{
    res.send(req.params)
});
app.listen(3000, () => console.log('Listening on port 3000...'));