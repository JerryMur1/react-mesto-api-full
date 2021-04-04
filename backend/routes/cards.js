const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, postCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/cards',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().min(2).pattern(new RegExp(/https?:\/\/w*[\da-zA-Z\W]+#?/)),
    }),
    headers: Joi.object().keys({

    }),
  }), getCards);
router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2).pattern(new RegExp(/https?:\/\/w*[\da-zA-Z\W]+#?/)),
  }),
  headers: Joi.object().keys({

  }),
}), postCard);
router.delete('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), deleteCard);
router.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), likeCard);
router.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), dislikeCard);
module.exports = router;
