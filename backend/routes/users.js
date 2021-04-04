const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getProfile, patchProfile, updateAvatar, login, createUser, getUser,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
}), getProfile);

router.get('/users/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), getUser);

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

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({

  }),
}), patchProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(new RegExp(/https?:\/\/w*[\da-zA-Z\W]+#?/)),
  }),
  headers: Joi.object().keys({

  }),
}), updateAvatar);

module.exports = router;
