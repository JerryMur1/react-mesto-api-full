const router = require('express').Router();
const {
  getCards, postCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/cards',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({
    
  })
}), getCards);
router.post('/cards',celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({
    
  })
}), postCard);
router.delete('/cards/:cardId',celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({
    
  })
}), deleteCard);
router.put('/cards/:cardId/likes',celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({
    
  })
}), likeCard);
router.delete('/cards/:cardId/likes',celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
  headers: Joi.object().keys({
    
  })
}), dislikeCard);
module.exports = router;
