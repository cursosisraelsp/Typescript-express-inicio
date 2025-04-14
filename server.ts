import express from 'express';
 const portNumber = 3000;

 const app = express();

 app.get('/', (request, response) => {
    response.send('You requested ' + request.query.firstname + ' ' + request.query.lastname);
 })
 app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
 });