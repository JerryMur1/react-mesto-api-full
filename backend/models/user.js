const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (x) => /https?:\/\/w*[\da-zA-Z\W]+#?/g.test(x),
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      // eslint-disable-next-line no-undef
      validator: (x) => isEmail(x),
      message: 'Неправильно введена почта',
    },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
