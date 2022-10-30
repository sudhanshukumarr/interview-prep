const express = require('express');
const app = express();

const course = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
];

app.get('/', (req,res) => {
    res.send('helloo world');               
});

app.get('/api/course', (req, res)=>{
    res.send(course);
});
app.get('/api/course/:id',(req,res) =>{
   const port = course.find(c => c.id === parseInt(req.params.id));
   res.send(course);
});
app.listen(3000, () => console.log('Listening on port 3000...'));