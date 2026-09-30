const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  type: {
    type: String,
    enum: ['Emergency Rescue Alert', 'General Inquiry', 'Volunteer Request', 'Seminar / Workshop Request'],
    default: 'Emergency Rescue Alert'
  },
  location: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'New'
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
