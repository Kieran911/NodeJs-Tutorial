const express = require('express');

const app = express(); // app could be any name of your choice

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Add product</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);
// const server = http.createServer(routes.handler);
//server.listen(3000);

app.listen(3000);
