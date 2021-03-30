const UserModel = require('../models/user');

const errorHandler = (err, res) => {
  if (err.name === 'ValidationError' || err.kind === 'string') {
    res.status(400).send({ message: 'Валидация не прошла' });
  } else if (err.kind === 'ObjectId') {
    res.status(400).send({ message: 'Ошибка' });
  } else if (err.message === 'Такого пользователя в базе нет') {
    res.status(404).send({ message: err.message });
  } else {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
};

const getUsers = (req, res) => UserModel.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => errorHandler(err, res));

const getProfile = (req, res) => UserModel.findOne({ _id: req.params._id })
  .orFail(() => {
    throw new Error('Такого пользователя в базе нет');
  })
  .then((user) => res.status(200).send(user))
  .catch((err) => errorHandler(err, res));

const postProfile = (req, res) => {
  const { name, about, avatar } = req.body;
  UserModel.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    // eslint-disable-next-line consistent-return
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Валидация не прошла' });
      }
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).send({ message: 'Запрос не найден' });
    });
};

const patchProfile = (req, res) => {
  const { name, about } = req.body;
  UserModel.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .orFail(() => {
      throw new Error('Такого пользователя в базе нет');
    })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      errorHandler(err, res);
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  UserModel.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .orFail(() => {
      throw new Error('Такого пользователя в базе нет');
    })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      errorHandler(err, res);
    });
};

module.exports = {
  getUsers, getProfile, postProfile, patchProfile, updateAvatar,
};
