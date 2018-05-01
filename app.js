const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io').listen(http);

http.listen(3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/server', function(req, res){
    res.sendFile(__dirname + '/server.html');
});

//接続確立時の処理
io.on('connection', function (socket) {
    socket.on('video', function(d){
        // そのまま全接続先へ送信
        io.emit('video', d);
    });
});