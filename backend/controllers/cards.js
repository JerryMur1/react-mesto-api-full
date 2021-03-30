const CardModel = require('../models/card');
const NotFoundError = require('../errors/error.js')
// const errorHandler = (err, res) => {
//   if (err.name === 'ValidationError' || err.kind === 'string') {
//     res.status(400).send({ message: 'Валидация не прошла' });
//   } else if (err.kind === 'ObjectId') {
//     res.status(400).send({ message: 'Нет такой карточки' });
//   } else if (err.message === 'Такой карточки в базе нет') {
//     res.status(404).send({ message: err.message });
//   } else {
//     res.status(500).send({ message: 'Произошла ошибка' });
//   }
// };

const getCards = (req, res) => CardModel.find({})
  .then((cards) => res.status(200).send(cards))
  .catch(() => res.status(500).send({ message: 'Нет карточки с таким id' }));
const postCard = (req, res) => {
  const { name, link } = req.body;
  CardModel.create({ name, link, owner: req.user._id })
    // eslint-disable-next-line consistent-return
    .then((card) => res.status(200).send(card))
    .catch(next);
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  CardModel.findByIdAndRemove(cardId)
    .orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
    .then((card) => res.status(200).send(card))
    .catch(next);
};
const likeCard = (req, res) => CardModel.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
).orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
  .then((card) => res.send(card))
  // eslint-disable-next-line consistent-return
  .catch(next);

const dislikeCard = (req, res) => CardModel.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
).orFail(() => { throw new NotFoundError('Такой карточки в базе нет'); })
  .then((card) => res.send(card))
  // eslint-disable-next-line consistent-return
  .catch(next);
module.exports = {
  getCards, postCard, deleteCard, likeCard, dislikeCard,
};
