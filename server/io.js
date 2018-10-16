const Deal = require('./models/Deal')


module.exports = (io) => {
    console.log("Socketio listening...");

    io.on('connection', function(socket){
        console.log(`A user connected with id: ${socket.id}`);
        console.log(socket.handshake.headers.cookie);    
    //    socket.emit('message',{msg:"Holafromserverrr", timestamp: Date.now()});

        socket.on('subscribe', function(room) {
            console.log('joining room', room);
            socket.join(room)
            socket.emit('conversation private post',{message:"Holafromserverrr", timestamp: Date.now()})
            Deal.findById(room, {'conversation':1, '_id':0})
            .then(resp => {socket.emit('output', resp)})
        })
        
        socket.on('send message', data => {
            console.log("Received message from client");
            console.log(data);
            Deal.findByIdAndUpdate(data.room,
                {$push: {conversation: {message: data.message, userId: data.userId}}},
                {safe: true, upsert: true}
                ).then(console.log)

            socket.broadcast.emit('conversation private post', {
                message: data.message
            });
        })
    });
}