import mongoose from 'mongoose';

const requiredStringValidator = [
  (val) => {
    const testVal = val.trim();
    return (testVal.length > 0 && testVal.length <= 50);
  },
  // Custom error text...
  '{PATH} must be between 1 and 50 characters long',
];

const standUpSchema = new mongoose.Schema({
  teamMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teamMember',
  },
  teamMember: {
    type: String,
    required: true,
    validate: requiredStringValidator,
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator,
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator,
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator,
  },
  impediment: {
    type: String,
    required: true,
    default: 'None',
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Standup', standUpSchema);
