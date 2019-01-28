import mongoose from 'mongoose';

const sizeValidator = [
  (val) => {
    const testVal = val.trim();
    return (testVal.length > 0 && testVal.length <= 50);
  },
  // Custom error text...
  '{PATH} must be between 1 and 50 characters long',
];

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: sizeValidator,
  },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
