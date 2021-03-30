const router = require('express').Router();
const {
  getUsers, getProfile, postProfile, patchProfile, updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.post('/users', postProfile);

router.patch('/users/me', patchProfile);

router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
