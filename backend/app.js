const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); 
const { errors } = require('../frontend/node_modules/celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const auth = require('./middlewares/auth');

const app = express();
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');
const signIn = require('./routes/users.js');
const signUp = require('./routes/users.js');

app.use(requestLogger);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', signIn);
app.use('/', signUp);

app.use(auth);
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) =>{
  if(err.name === 'ValidationError' || err.name === 'CastError') {
    err.statusCode = 400;
    err.message = 'Ошибка валидации'
  } else if(err.code === 11000) {
    err.statusCode = 409;
    err.message = 'Пользователь с таким емейлом уже существует'
  }
  const { statusCode = 500, message } = err
  res.status(statusCode).send({message: statusCode = 500 ? 'На сервере произошла ошибка' : message})
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
