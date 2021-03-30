// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcryptjs');

const UserModel = require('../models/user');
const NotFoundError = require('../errors/error.js')
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

const getUsers = (req, res) => UserModel.find({})
  .then((users) => res.status(200).send(users))
  .catch(next);

const getProfile = (req, res) => UserModel.findOne({ _id: req.params._id })
  .orFail(() => {
    throw new NotFoundError('Такого пользователя в базе нет');
  })
  .then((user) => res.status(200).send(user))
  .catch(next);


const patchProfile = (req, res) => {
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

const updateAvatar = (req, res) => {
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

const login = (req, res) => {
  const { email, password } = req.body;

  return UserModel.findUserByCredentials(email, password)
    .then((user) => {
      // eslint-disable-next-line no-undef
      const token = jwt.sign({ _id: user._id }, 'super-strong-secret', { expiresIn: '7d' });

      // вернём токен
      res.send({ token });
    })
    .catch(next);
};

// eslint-disable-next-line consistent-return
const createUser = (req, res) => {
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
  getUsers, getProfile, patchProfile, updateAvatar, login, createUser,
};
