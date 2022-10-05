const express = require('express');

const app = express()

const ages = [1,2,3,4];

function returnAges(){
    return ages;
}
function insertAge(age){
    ages.push(age)
    return age;
}
function upadateAges(indexOfAge,age){
    ages[indexOfAge] = age;
    return age;
}
function deleteLastAge(){
    return ages.pop()
}
// middleare pattern
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