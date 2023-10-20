const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

const hostname = '127.0.0.1';
const port =  3002;
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('./build'));
//루트 주소로 get 요청있을 시 실행
app.get('/', (req, res) => {
    res.sendFile('./build/index.html');
});
//어떤 경로로 들어오든 상관없이 모든 get 요청 실행
app.get('*', (res, req) => {
    res.sendFile('./build/index.html');
});
http.listen(port, hostname, () => {
    console.log(`Run Server at http://${hostname}:${port}`);
});

// ../nodeact/server.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//     //parse => deprecated
//     const baseURL =  req.protocol + '://' + req.headers.host + '/';
//     const reqUrl = new URL(req.url, baseURL);
//     console.log(reqUrl);    // output : URL Obj
//     console.log(req.url);   // output : /

//     if(req.method === 'GET'){
//         const filePath = req.url === '/' ? 'index.html' : req.url;
//         //path.extname : 확장자명만 가짐
//         const fileExt = path.extname(filePath);

//         if(fileExt){
//             //path.join : 여러 인자를 넣으면 하나의 경로로 합쳐줌
//             fs.readFile(`./build/${filePath}`, (err, data)=>{
//                 if(err){
//                     res.writeHead(404);
//                     res.end('Not Found');
//                 }
//                 else{
//                     res.writeHead(200, {'Content-Type' : getContentType(fileExt)});
//                     res.end(data);
//                 }
//             })
//         }
//     }
// });

// server.listen(port, hostname, ()=>{
//     console.log(`Run Server : http://${hostname}:${port}/`);
// });

// function getContentType(fileExt){
//     switch (fileExt) {
//         case '.html':
//           return 'text/html';
//         case '.js':
//           return 'application/javascript';
//         case '.css':
//           return 'text/css';
//         case '.json':
//           return 'application/json';
//         case '.svg':
//           return 'image/svg+xml';
//         default:
//           return 'application/octet-stream';
//     }
// }