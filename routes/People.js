const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

router.route('/').get(getPeople).post(createPerson);
router
  .route('/:id')
  .get(getSinglePerson)
  .patch(updatePerson)
  .delete(deletePerson);

module.exports = router;
