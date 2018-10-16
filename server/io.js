


module.exports = (io) => {
    console.log("Socketio listening...");

    io.on('connection', function(socket){
        console.log(`A user connected with id: ${socket.id}`);
        console.log(socket.handshake.headers.cookie);    
//        socket.emit('message',{msg:"Holafromserverrr", timestamp: Date.now()});
        
        socket.on('message', data => {
            console.log("Received message from client");
            console.log(data);
            socket.broadcast.emit('message', data);
        })
    });

}