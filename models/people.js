const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [10, 'Name can not be longer than 10 letters'],
  },
  lastname: {
    type: String,
    required: true,
    maxLength: [10, 'Lastname can not be longer than 10 letters'],
  },
});

module.exports = mongoose.model('Person', peopleSchema);
