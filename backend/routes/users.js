const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getProfile, patchProfile, updateAvatar, login, createUser, getUser,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

router.get('/users', getUsers);

router.get('/users/me', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
  }),
}), getUser);

router.get('/users/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
}), getProfile);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
}), createUser);

router.patch('/users/me', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    about: Joi.string().required().min(2),
  }),
}), patchProfile);

router.patch('/users/me/avatar', auth, celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(new RegExp(/https?:\/\/w*[\da-zA-Z\W]+#?/)),
  }),
}), updateAvatar);

module.exports = router;
