// const {httpserver} = require('../app')

// const io = new Server(httpserver, {
//       cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//       }
//     });

//     io.on('connection', (socket) => {
//         let userId;
      
//         socket.on('conectadoclient', (user) => {
//           userId= user;
//           socket.broadcast.emit('messages', {userId: userId, message: `${userId} se ha conectado al chat`});
//         }
//         );
//         socket.on('message', (message, userId) => {
//             io.emit('messages', {message, userId});
//         }
//         );
//         socket.on('disconnect', () => {
//             io.emit('messages', {userId , message: `${userId} se ha desconectado del chat `});
//         }
//         );
//       }
//       );
