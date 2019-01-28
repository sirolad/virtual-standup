import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import api from './api';

const app = express();

app.set('port', process.env.PORT || 8081);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use((req, res) => {
  const err = new Error('Not found');
  err.status = 404;
  res.json(err);
});

mongoose.connect('mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(app.get('port'), () => {
    console.log(`API Listening on PORT ${app.get('port')}`);
  });
});
