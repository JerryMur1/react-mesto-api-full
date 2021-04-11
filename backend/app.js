/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001 } = process.env;
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const app = express();

const auth = require('./middlewares/auth');

const options = {
  origin: [
    'http://localhost:3000',
    'https://borman.nomoredomains.club',
    'https://jerrymur1.github.io/react-mesto-api-full/',
  ],
  credentials: true,
};

// app.use('*', cors(options));

app.use((req, res, next) => {
  const origins = [
    'http://localhost:3000',
    'https://borman.nomoredomains.club',
    'https://jerrymur1.github.io/react-mesto-api-full/',
  ];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < origins.length; i++) {
    const origin = origins[i];

    if (req.headers.origin.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(requestLogger);
app.use(bodyParser.json());

const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');
const signIn = require('./routes/users.js');
const signUp = require('./routes/users.js');
const NotFoundError = require('./errors/error');

app.use('/', signIn);
app.use('/', signUp);

app.use(auth);
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', (req, res) => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    err.statusCode = 400;
    err.message = 'Ошибка валидации';
  } else if (err.code === 11000) {
    err.statusCode = 409;
    err.message = 'Пользователь с таким емейлом уже существует';
  }
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
