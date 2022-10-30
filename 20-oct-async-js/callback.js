console.log('before');
 getUser(1,function(user){
    console.log('user' , user);
 });
 
console.log('after');

function getUser(id,callback){
    setTimeout (() =>{
        console.log('reading from a data base....');
        callback({id : id , gitHubUserName : 'Sudhanshu' });
        return  ;
        
    }, 2000 );
}