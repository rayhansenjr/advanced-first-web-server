// Your server code here...
import express from 'express';
import mongoose from 'mongoose';
import ContactRoutes from './routes/ContactRoutes';
import bodyParser from 'body-parser';

// creating my new instance of express
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(function (err,request, response) {
  return response.status(500).send('Whoops...mistakes were made. ${err}');
});

// setting port
const PORT = 3001;

// Telling instance of express to listen to request made on our port
app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR', err);
  }
  return console.log('Listening on: http://localhost:' + PORT);
});
