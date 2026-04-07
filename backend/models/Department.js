const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  shortName: {
    type: String,
    required: true,
    uppercase: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  hod: {
    name: String,
    email: String,
    phone: String,
    qualification: String
  },
  facultyCount: {
    type: Number,
    default: 0
  },
  studentCount: {
    type: Number,
    default: 0
  },
  labs: [{
    name: String,
    description: String,
    equipment: [String]
  }],
  achievements: [String],
  established: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Department', departmentSchema);