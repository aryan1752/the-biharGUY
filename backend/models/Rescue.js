const mongoose = require('mongoose');

const rescueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Birds', 'Owls', 'Snakes & Reptiles', 'Mammals', 'Other Wildlife'],
    required: true
  },
  rescueDate: {
    type: String,
    required: true
  },
  formattedDate: {
    type: Date
  },
  location: {
    type: String,
    required: true
  },
  sourceThreat: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/wetland_bird_rescue.jpg'
  },
  status: {
    type: String,
    default: 'Rescued & Released'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Rescue', rescueSchema);
