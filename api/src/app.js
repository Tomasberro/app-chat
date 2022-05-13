const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 const routes = require('./routes/index');
const cors = require ('cors')
const {createServer} = require('http');
const { Server} = require('socket.io');

require('./db.js');

const app = express();
const httpserver = createServer(app);
const io = new Server(httpserver, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.name = 'API';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

 app.use('/api', routes);

// Error catching endware.
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

io.on('connection', (socket) => {
  let userId;

  socket.on('conectadoclient', (user) => {
    userId= user;
    socket.broadcast.emit('messages', {userId: userId, message: `${userId} se ha conectado al chat`});
  }
  );
  socket.on('message', (message, userId) => {
      io.emit('messages', {message, userId});
  }
  );
  socket.on('disconnect', () => {
      io.emit('messages', {userId , message: `${userId} se ha desconectado del chat `});
  }
  );
}
);


module.exports = {app, httpserver};