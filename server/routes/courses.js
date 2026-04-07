const express = require('express');
const Course = require('../models/Course');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const { department, semester, type } = req.query;
    let query = { isActive: true };

    if (department) query.department = department;
    if (semester) query.semester = semester;
    if (type) query.type = type;

    const courses = await Course.find(query)
      .populate('department', 'name code')
      .populate('faculty', 'name email')
      .sort({ semester: 1, name: 1 });
    res.json(courses);
  } catch (error) {
    console.error('Courses fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('department', 'name code description')
      .populate('faculty', 'name email phone designation')
      .populate('prerequisites', 'name code');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Course fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new course (admin only)
router.post('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    await course.populate('department', 'name code');
    res.status(201).json(course);
  } catch (error) {
    console.error('Course creation error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Course code already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Update course (admin only)
router.put('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('department', 'name code');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Course update error:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Course code already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Delete course (admin only)
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({ message: 'Course deactivated successfully' });
  } catch (error) {
    console.error('Course deletion error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get courses by department
router.get('/department/:departmentId', async (req, res) => {
  try {
    const courses = await Course.find({
      department: req.params.departmentId,
      isActive: true
    })
      .populate('faculty', 'name email')
      .sort({ semester: 1, name: 1 });
    res.json(courses);
  } catch (error) {
    console.error('Department courses fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get courses by semester
router.get('/semester/:semester', async (req, res) => {
  try {
    const courses = await Course.find({
      semester: req.params.semester,
      isActive: true
    })
      .populate('department', 'name code')
      .populate('faculty', 'name email')
      .sort({ name: 1 });
    res.json(courses);
  } catch (error) {
    console.error('Semester courses fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search courses
router.get('/search/:query', async (req, res) => {
  try {
    const searchRegex = new RegExp(req.params.query, 'i');
    const courses = await Course.find({
      isActive: true,
      $or: [
        { name: searchRegex },
        { code: searchRegex },
        { description: searchRegex }
      ]
    })
      .populate('department', 'name code')
      .populate('faculty', 'name email')
      .limit(20);
    res.json(courses);
  } catch (error) {
    console.error('Course search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;