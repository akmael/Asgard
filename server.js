var express =require('express'),
    server = express(),
    logger = require('morgan')('dev'),
    path = require('path');



server.use(logger);
server.use(express.static(__dirname+'/public'));

server.set('port', process.env.PORT||8080);

server.get('/', home);
server.get('/index.html', home)
server.get('/about.html', about);
server.get('/employee.html', employee);
server.get('/products.html', products);




server.listen(server.get('port'), listenCallBack)

function listenCallBack(){
  console.log('sever is live on port: '+server.get('port'));
}

function home(req, res){
    res.sendFile(path.join(__dirname+ '/public/html/index.html'))
}

function about(req, res){
  res.sendFile(path.join(__dirname+'/public/html/about.html'))
}
function employee (req, res){
  res.sendFile(path.join(__dirname+'/public/html/employee.html'))
}
function products(req, res){
    res.sendFile(path.join(__dirname+'/public/html/products.html'))
}
