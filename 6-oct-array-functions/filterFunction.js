const arr = [5,1,3,2,6];

// filter odd values

function isOdd(x)  {
    return x % 2 ;
}
const output = arr.filter(isOdd);
console.log(output);

//filter even values

function isEven(x)  {
    return x % 2 === 0 ;
}
const output1 = arr.filter(isEven);
console.log(output1);

// greater than 4

function greaterthanFour(x){
    return x>4;
}
const output2 = arr.filter(greaterthanFour);
console.log(output2);

//using arrow functions

const output3 = arr.filter((x)=> x%2);
console.log(output3);


const output4 = arr.filter((x)=> x%2===0);
console.log(output4);

const output5 = arr.filter((x)=> x>4);
console.log(output5);