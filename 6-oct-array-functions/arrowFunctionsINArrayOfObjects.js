const users =[
    {firstName: 'akshay', lastName:'saini', age:26},
    {firstName: 'donald', lastName:'trump', age:75}, 
    {firstName: 'elon', lastName:'musk', age:50},
    {firstName: 'deepika', lastName:'padukone', age:26},  
];

// list of full Names using map function 

const output = users.map((x)=> x.firstName + ' '+ x.lastName);
console.log(output);

// first name of users who have age less than 30.

const output1 = users.filter((x)=> x.age<30).map((x)=> x.firstName);
console.log(output1);

