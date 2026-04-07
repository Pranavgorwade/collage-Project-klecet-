const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Academic', 'Cultural', 'Technical', 'Sports', 'Workshop', 'Seminar', 'Conference']
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    start: String,
    end: String
  },
  venue: {
    type: String,
    required: true
  },
  organizer: {
    name: String,
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department'
    },
    contact: String
  },
  images: [String], // URLs to event images
  registrationRequired: {
    type: Boolean,
    default: false
  },
  maxParticipants: Number,
  registeredParticipants: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    registeredAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing', 'Completed', 'Cancelled'],
    default: 'Upcoming'
  },
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
eventSchema.index({ date: 1, status: 1 });
eventSchema.index({ category: 1 });

module.exports = mongoose.model('Event', eventSchema);