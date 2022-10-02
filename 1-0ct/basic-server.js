const http = require('http');

const port = 3000;

const server = http.createServer((req,res)=>{
    let {url, method} = req;

    // var body = ''
    // req.on('data', function(data) {
    //   body += data
    //   console.log('Partial body: ' + body)
    // })
    // req.on('end', function() {
    //   console.log('Body: ' + body)
    //   res.writeHead(200, {'Content-Type': 'text/html'})
    //   res.end('post received')
    // })
    if(url=='/sudhanshu' && method === 'GET'){
        res.end('hello sudhanshu GET');        
    }
    else if(url=='/sudhanshu' && method === 'POST'){
        res.end('hello sudhanshu POST');        

    }else{
    res.write('hello')
    res.end();
    }

});

server.listen(port,()=>{
    console.log('server running');
});




