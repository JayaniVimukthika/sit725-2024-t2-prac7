const express= require("express");
const app= express();
app.use(express.static('public'))
const port=3040;
/////////////////////////////////////////////
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

// io.on('connection',(socket)=>{
//     console.log('user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     setInterval(()=>{
//         x=parseInt(Math.random()*10);
//         socket.emit('number', x);
//         console.log('Emmiting Number '+x);
//     }, 1000)
// });

http.listen(port, ()=>{
    console.log('express server started');
    io.on('connection',(socket)=>{
        console.log('user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    
        setInterval(()=>{
            x=parseInt(Math.random()*10);
            socket.emit('number', x);
            console.log('Emmiting Number '+x);
        }, 1000)
    });
});
   


    
    ///////////////////////////////////////////////////

    /*const port=3040;
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })*/