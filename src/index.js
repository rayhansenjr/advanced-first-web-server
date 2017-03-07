// Your server code here...
import express from 'express';

// creating my new instance of express
const app = express();

app.get('/contacts', (request, response) => {
  return response.json(request['contact']);
});

// declaring the route
app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

// setting port
const PORT = 3001;

// Telling instance of express to listen to request made on our port
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error', err);
  }
  return console.log('Listening on: http://localhost:' + PORT);
});
