/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const UserModel = require('../models/user');
const NotFoundError = require('../errors/error.js');

const SALT_ROUNDS = 10;
// const errorHandler = (err, res) => {
//   if (err.name === 'ValidationError' || err.kind === 'string') {
//     res.status(400).send({ message: 'Валидация не прошла' });
//   } else if (err.kind === 'ObjectId') {
//     res.status(400).send({ message: 'Ошибка' });
//   } else if (err.message === 'Такого пользователя в базе нет') {
//     res.status(404).send({ message: err.message });
//   } else if (err.message === 'Такого пользователя в базе нет') {
//     res.status(401).send({ message: err.message });
//   } else {
//     res.status(500).send({ message: 'Произошла ошибка' });
//   }
// };

const getUsers = (req, res, next) => UserModel.find({})
  .then((users) => res.status(200).send(users))
  .catch(next);
const getUser = (req, res, next) => UserModel.findById(auth)
  .then((user) => {
    if (!user) {
      throw new NotFoundError('Такого пользователя в базе нет');
    }
    return res.status(200).send(user);
  })
  .catch(next);
const getProfile = (req, res, next) => UserModel.findOne({ _id: req.params._id })
  .orFail(() => {
    throw new NotFoundError('Такого пользователя в базе нет');
  })
  .then((user) => res.status(200).send(user))
  .catch(next);

const patchProfile = (req, res, next) => {
  const { name, about } = req.body;
  UserModel.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
  })
    .orFail(() => {
      throw new NotFoundError('Такого пользователя в базе нет');
    })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  UserModel.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
  })
    .orFail(() => {
      throw new NotFoundError('Такого пользователя в базе нет');
    })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new NotFoundError();
      }
      bcrypt.compare(password, user.password)

        .then(matched);
      if (!matched) {
        throw new NotFoundError();
      }
    })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'super-strong-secret', { expiresIn: '7d' });

      res.send({ token });
    })
    .catch(next);
};

// eslint-disable-next-line consistent-return
const createUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send({ message: 'Нет емейла или пароля' });
  }
  bcrypt.hash(password, SALT_ROUNDS)
    .then((hash) => UserModel.create({ email, password: hash }))
    .then(() => {
      res.status(200).send({ message: 'Пользователь создан' });
    })
    .catch(next);
};

module.exports = {
  getUsers, getProfile, patchProfile, updateAvatar, login, createUser, getUser,
};
