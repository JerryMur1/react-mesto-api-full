const router = require('express').Router();
const {
  getUsers, getProfile, patchProfile, updateAvatar, login, createUser, getUser,
} = require('../controllers/users');
const { celebrate, Joi } = require('celebrate');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.get('/users/me', getUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

router.post('/signup',celebrate({
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
    
  })
}), patchProfile);

router.patch('/users/me/avatar',celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
  headers: Joi.object().keys({
    
  })
}), updateAvatar);

module.exports = router;
