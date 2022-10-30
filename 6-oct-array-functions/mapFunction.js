const arr = [5,1,3,2,6]

function double(x){
    return x*2;
}

const output = arr.map(double);

console.log(output);


function triple(x){
    return x*3;
}

const output2 = arr.map(triple);

console.log(output2);

function binary(x){
    return x.toString(2);
}

const output3 = arr.map(binary);
console.log(output3);

//map function using arow function

const output4 = arr.map((x) => x*2);
console.log(output4);

const output5 = arr.map((x)=> x*3);
console.log(output5);

const output6 = arr.map((x)=> x.toString(2));
console.log(output6);