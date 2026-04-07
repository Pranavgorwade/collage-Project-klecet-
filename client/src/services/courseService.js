import axios from '../utils/axios';

// Course API calls
export const courseAPI = {
  // Get all courses with optional filters
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return axios.get(`/courses${queryString ? `?${queryString}` : ''}`);
  },

  // Get course by ID
  getById: (id) => axios.get(`/courses/${id}`),

  // Create course (admin only)
  create: (data) => axios.post('/courses', data),

  // Update course (admin only)
  update: (id, data) => axios.put(`/courses/${id}`, data),

  // Delete course (admin only)
  delete: (id) => axios.delete(`/courses/${id}`),

  // Get courses by department
  getByDepartment: (departmentId) => axios.get(`/courses/department/${departmentId}`),

  // Get courses by semester
  getBySemester: (semester) => axios.get(`/courses/semester/${semester}`),

  // Search courses
  search: (query) => axios.get(`/courses/search/${encodeURIComponent(query)}`)
};