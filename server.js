const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: !process.env.PORT ? "http://localhost:3000" : "https://charmant-chat.rmoscuba.vercel.app",
      methods: ["GET", "POST"]
    }
  });

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {

  socket.join(1);

  socket.on('send', (msg, user) => {
    io.to(1).emit('message', { user: user, message: msg });
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});