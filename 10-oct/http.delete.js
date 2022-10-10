const express = require('express');

const Joi = require('joi')

const app = express();

app.use(express.json());

const courses = [
    {id :1 , name : 'course1'},
    {id :2 , name : 'course2'},
    {id :3 , name : 'course3'},
    ]

app.get('/',(req,res) => {
    res.send('hello world');
});

app.get('/api/courses',(req,res) => {
    res.send(courses)
});

app.get('/api/courses/:id',(req,res) =>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course not found')
    res.send(course);
});

app.post('/api/courses', (req,res) =>{
    const course = {
        id : courses.length + 1 ,
        name : req.body.name 
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res) =>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course not found')

    const schema = {
        name: Joi.string().min(3).required()
    };
   const result =  Joi.validate(req.body,schema);
   if(result.error ){
    res.status(400).send(result.error.details[0].message);
    return ;
}
course.name = req.body.name;
res.send(course)

});

app.delete('/api/courses/:id',(req,res) => {
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course not found')

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})


app.listen(3000, () => console.log("listening to port 3000......")) 