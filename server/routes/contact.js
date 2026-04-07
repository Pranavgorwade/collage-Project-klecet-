const express = require('express');
const Contact = require('../models/Contact');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all contact submissions (admin only)
router.get('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { status, category } = req.query;
    let query = {};

    if (status) query.status = status;
    if (category) query.category = category;

    const contacts = await Contact.find(query)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email')
      .sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Contacts fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get contact by ID (admin only)
router.get('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email');

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Contact fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update contact status (admin only)
router.put('/:id/status', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { status, priority, assignedTo } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status: status || contact.status,
        priority: priority || contact.priority,
        assignedTo: assignedTo || contact.assignedTo
      },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Contact status update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Respond to contact (admin only)
router.put('/:id/respond', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const { message } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status: 'Resolved',
        response: {
          message,
          respondedBy: req.user.userId,
          respondedAt: new Date()
        }
      },
      { new: true, runValidators: true }
    ).populate('response.respondedBy', 'name email');

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({
      message: 'Response sent successfully',
      contact
    });
  } catch (error) {
    console.error('Contact response error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete contact (admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Contact deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get contact statistics (admin only)
router.get('/stats/overview', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'New' });
    const resolvedContacts = await Contact.countDocuments({ status: 'Resolved' });

    res.json({
      total: totalContacts,
      new: newContacts,
      resolved: resolvedContacts,
      byStatus: stats
    });
  } catch (error) {
    console.error('Contact stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;