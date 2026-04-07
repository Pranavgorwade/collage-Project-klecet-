const express = require('express');
const Department = require('../models/Department');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find({ isActive: true })
      .populate('hod', 'name email phone')
      .sort({ name: 1 });
    res.json(departments);
  } catch (error) {
    console.error('Departments fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get department by ID
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id)
      .populate('hod', 'name email phone')
      .populate('faculty', 'name email phone designation');

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.json(department);
  } catch (error) {
    console.error('Department fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new department (admin only)
router.post('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    console.error('Department creation error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Department code already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Update department (admin only)
router.put('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.json(department);
  } catch (error) {
    console.error('Department update error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Department code already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Delete department (admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.json({ message: 'Department deactivated successfully' });
  } catch (error) {
    console.error('Department deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get department statistics
router.get('/:id/stats', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    // Get faculty count for this department
    const facultyCount = await require('../models/Faculty').countDocuments({
      department: req.params.id,
      isActive: true
    });

    // Get course count for this department
    const courseCount = await require('../models/Course').countDocuments({
      department: req.params.id,
      isActive: true
    });

    const stats = {
      facultyCount,
      courseCount,
      studentCount: department.studentCount,
      labCount: department.labs.length,
      achievementCount: department.achievements.length
    };

    res.json(stats);
  } catch (error) {
    console.error('Department stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;