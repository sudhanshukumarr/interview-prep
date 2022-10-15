console.log('before');
const user = getUser(1);
console.log(user);
console.log('after');

function getUser(id){
    setTimeout (() =>{
        console.log('reading from a data base....');
        return {id : id , gitHubUserName : 'Sudhanshu' };
        
    }, 2000 );
}