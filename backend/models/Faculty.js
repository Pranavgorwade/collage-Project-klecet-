const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  designation: {
    type: String,
    required: true,
    enum: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer']
  },
  qualification: {
    type: String,
    required: true
  },
  specialization: [String],
  experience: {
    type: Number, // in years
    required: true
  },
  publications: [{
    title: String,
    journal: String,
    year: Number,
    doi: String
  }],
  projects: [{
    title: String,
    funding: Number,
    status: {
      type: String,
      enum: ['Ongoing', 'Completed', 'Submitted']
    }
  }],
  profileImage: {
    type: String // URL to image
  },
  researchInterests: [String],
  achievements: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema);