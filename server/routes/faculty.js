const express = require('express');
const Faculty = require('../models/Faculty');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Get all faculty
router.get('/', async (req, res) => {
  try {
    const { department, designation } = req.query;
    let query = { isActive: true };

    if (department) query.department = department;
    if (designation) query.designation = designation;

    const faculty = await Faculty.find(query)
      .populate('department', 'name code')
      .sort({ name: 1 });
    res.json(faculty);
  } catch (error) {
    console.error('Faculty fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get faculty by ID
router.get('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id)
      .populate('department', 'name code description');

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }

    res.json(faculty);
  } catch (error) {
    console.error('Faculty fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new faculty (admin only)
router.post('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    await faculty.populate('department', 'name code');
    res.status(201).json(faculty);
  } catch (error) {
    console.error('Faculty creation error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Faculty email already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Update faculty (admin only)
router.put('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('department', 'name code');

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }

    res.json(faculty);
  } catch (error) {
    console.error('Faculty update error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Faculty email already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Delete faculty (admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }

    res.json({ message: 'Faculty member deactivated successfully' });
  } catch (error) {
    console.error('Faculty deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get faculty by department
router.get('/department/:departmentId', async (req, res) => {
  try {
    const faculty = await Faculty.find({
      department: req.params.departmentId,
      isActive: true
    }).sort({ designation: 1, name: 1 });
    res.json(faculty);
  } catch (error) {
    console.error('Department faculty fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get HODs
router.get('/designation/hod', async (req, res) => {
  try {
    const hods = await Faculty.find({
      designation: 'HOD',
      isActive: true
    })
      .populate('department', 'name code')
      .sort({ name: 1 });
    res.json(hods);
  } catch (error) {
    console.error('HODs fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search faculty
router.get('/search/:query', async (req, res) => {
  try {
    const searchRegex = new RegExp(req.params.query, 'i');
    const faculty = await Faculty.find({
      isActive: true,
      $or: [
        { name: searchRegex },
        { email: searchRegex },
        { designation: searchRegex },
        { specialization: searchRegex }
      ]
    })
      .populate('department', 'name code')
      .limit(20);
    res.json(faculty);
  } catch (error) {
    console.error('Faculty search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get faculty statistics
router.get('/:id/stats', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }

    // Get courses taught by this faculty
    const courseCount = await require('../models/Course').countDocuments({
      faculty: req.params.id,
      isActive: true
    });

    const stats = {
      courseCount,
      experience: faculty.experience,
      publications: faculty.publications.length,
      projects: faculty.projects.length
    };

    res.json(stats);
  } catch (error) {
    console.error('Faculty stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;