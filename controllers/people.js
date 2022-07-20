const Person = require('../models/people');

const getPeople = async (req, res) => {
  try {
    const people = await Person.find({});
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSinglePerson = async (req, res) => {
  const { id: personID } = req.params;
  try {
    const person = await Person.findOne({ _id: personID });
    if (!person) {
      return res
        .status(404)
        .json({ msg: `The person with the Id of ${personID} does not exist.` });
    }
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatePerson = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id: personID } = req.params;
    const person = await Person.findByIdAndDelete({ _id: personID });
    if (!person) {
      return res
        .status(404)
        .json({ msg: `The person with the Id of ${personID} does not exist.` });
    }
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getPeople,
  createPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
};
