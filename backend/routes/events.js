const express = require('express');
const Event = require('../models/Event');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const { type, status, upcoming } = req.query;
    let query = {};

    if (type) query.type = type;
    if (status) query.status = status;
    if (upcoming === 'true') {
      query.date = { $gte: new Date() };
    }

    const events = await Event.find(query)
      .populate('organizer', 'name email')
      .sort({ date: 1 });
    res.json(events);
  } catch (error) {
    console.error('Events fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'name email phone')
      .populate('attendees', 'name email');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Event fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new event (admin only)
router.post('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      organizer: req.user.userId
    });
    await event.save();
    await event.populate('organizer', 'name email');
    res.status(201).json(event);
  } catch (error) {
    console.error('Event creation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update event (admin only)
router.put('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('organizer', 'name email');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Event update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete event (admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Event deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Register for event
router.post('/:id/register', authenticateToken, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if event is full
    if (event.attendees.length >= event.capacity) {
      return res.status(400).json({ message: 'Event is full' });
    }

    // Check if user is already registered
    if (event.attendees.includes(req.user.userId)) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    event.attendees.push(req.user.userId);
    await event.save();

    res.json({ message: 'Successfully registered for event' });
  } catch (error) {
    console.error('Event registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Unregister from event
router.delete('/:id/register', authenticateToken, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const attendeeIndex = event.attendees.indexOf(req.user.userId);
    if (attendeeIndex === -1) {
      return res.status(400).json({ message: 'Not registered for this event' });
    }

    event.attendees.splice(attendeeIndex, 1);
    await event.save();

    res.json({ message: 'Successfully unregistered from event' });
  } catch (error) {
    console.error('Event unregistration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get upcoming events
router.get('/upcoming/all', async (req, res) => {
  try {
    const events = await Event.find({
      date: { $gte: new Date() },
      status: 'Active'
    })
      .populate('organizer', 'name email')
      .sort({ date: 1 })
      .limit(10);
    res.json(events);
  } catch (error) {
    console.error('Upcoming events fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get events by type
router.get('/type/:type', async (req, res) => {
  try {
    const events = await Event.find({
      type: req.params.type,
      status: 'Active'
    })
      .populate('organizer', 'name email')
      .sort({ date: -1 });
    res.json(events);
  } catch (error) {
    console.error('Events by type fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search events
router.get('/search/:query', async (req, res) => {
  try {
    const searchRegex = new RegExp(req.params.query, 'i');
    const events = await Event.find({
      $or: [
        { title: searchRegex },
        { description: searchRegex },
        { location: searchRegex }
      ]
    })
      .populate('organizer', 'name email')
      .sort({ date: -1 })
      .limit(20);
    res.json(events);
  } catch (error) {
    console.error('Event search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get event statistics
router.get('/:id/stats', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const stats = {
      totalAttendees: event.attendees.length,
      capacity: event.capacity,
      availableSpots: event.capacity - event.attendees.length,
      registrationRate: event.capacity > 0 ? (event.attendees.length / event.capacity) * 100 : 0
    };

    res.json(stats);
  } catch (error) {
    console.error('Event stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;