const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  type: {
    type: String,
    enum: ['UG', 'PG', 'Diploma'],
    required: true
  },
  duration: {
    type: String,
    required: true // e.g., "4 Years", "2 Years"
  },
  totalSeats: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  syllabus: [{
    semester: Number,
    subjects: [{
      name: String,
      code: String,
      credits: Number
    }]
  }],
  feeStructure: {
    tuitionFee: Number,
    developmentFee: Number,
    otherFees: Number,
    totalFee: Number
  },
  accreditation: {
    nba: Boolean,
    naac: Boolean,
    others: [String]
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);