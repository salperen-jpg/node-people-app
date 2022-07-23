const Person = require('../models/people');
const asyncWrapper = require('../middleware/async');

const getPeople = asyncWrapper(async (req, res) => {
  const people = await Person.find({});
  res.status(200).json({ people });
});

const createPerson = asyncWrapper(async (req, res) => {
  const person = await Person.create(req.body);
  res.status(201).json({ person });
});

const getSinglePerson = asyncWrapper(async (req, res) => {
  const { id: personID } = req.params;
  const person = await Person.findOne({ _id: personID });
  if (!person) {
    return res
      .status(404)
      .json({ msg: `The person with the Id of ${personID} does not exist.` });
  }
  res.status(200).json({ person });
});

const updatePerson = asyncWrapper(async (req, res) => {
  const { id: personID } = req.params;
  const person = await Person.findByIdAndUpdate({ _id: personID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!person) {
    return res
      .status(404)
      .json({ msg: `The person with the Id of ${personID} does not exist.` });
  }
  res.status(200).json({ person });
});

const deletePerson = asyncWrapper(async (req, res) => {
  const { id: personID } = req.params;
  const person = await Person.findByIdAndDelete({ _id: personID });
  if (!person) {
    return res
      .status(404)
      .json({ msg: `The person with the Id of ${personID} does not exist.` });
  }
  res.status(200).json({ person });
});

module.exports = {
  getPeople,
  createPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
};
