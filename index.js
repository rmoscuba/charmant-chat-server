const app = require('express')();
const http = require('http').createServer(app);

const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


http.listen(port, () => {
  console.log(`listening on *:${port}`);
});