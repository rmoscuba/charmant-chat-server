const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  socket.on('send', (message, user) => {
    console.log(`message "${message} -> "${user}" `);
    io.to(user).emit('message', { user: user, msg: message });
    console.log(`message emited`);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});