/* eslint-disable no-undef */
const CardModel = require('../models/card');
const NotFoundError = require('../errors/error.js');

const getCards = (req, res, next) => {
  CardModel.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};
const postCard = (req, res, next) => {
  const { name, link } = req.body;
  CardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  CardModel.findByIdAndRemove(cardId)
    .orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
    .then((card) => res.status(200).send(card))
    .catch(next);
};
const likeCard = (req, res, next) => CardModel.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
).orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
  .then((card) => res.send(card))
  .catch(next);

const dislikeCard = (req, res, next) => CardModel.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
).orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
  .then((card) => res.send(card))
  .catch(next);
module.exports = {
  getCards, postCard, deleteCard, likeCard, dislikeCard,
};
