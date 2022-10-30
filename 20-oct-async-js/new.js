console.log('before');
const user = getUser(1);
console.log(user);
console.log('after');

function getUser(id,callback){
    setTimeout (() =>{
        console.log('reading from a data base....');
        return {id : id , gitHubUserName : 'Sudhanshu' };
        
    }, 2000 );
}

// it gives undefined output because the function getUser is going to take time to execute , so it is not executed and give undefine output
