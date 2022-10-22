const arr = [5,1,3,2,6];

// sum 

function findSum(arr){
    let sum = 0;
    for(let i= 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.group(findSum(arr))

const output = arr.reduce(function (acc,curr){
    acc = acc+curr;
    return acc; 
},0)
console.log(output);

// maxium

function findMax(x){
    let max = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax(arr)); 



const output1 = arr.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0);

console.log(output1);
