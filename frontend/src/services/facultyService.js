import axios from '../utils/axios';

// Faculty API calls
export const facultyAPI = {
  // Get all faculty with optional filters
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return axios.get(`/faculty${queryString ? `?${queryString}` : ''}`);
  },

  // Get faculty by ID
  getById: (id) => axios.get(`/faculty/${id}`),

  // Create faculty (admin only)
  create: (data) => axios.post('/faculty', data),

  // Update faculty (admin only)
  update: (id, data) => axios.put(`/faculty/${id}`, data),

  // Delete faculty (admin only)
  delete: (id) => axios.delete(`/faculty/${id}`),

  // Get faculty by department
  getByDepartment: (departmentId) => axios.get(`/faculty/department/${departmentId}`),

  // Get HODs
  getHODs: () => axios.get('/faculty/designation/hod'),

  // Search faculty
  search: (query) => axios.get(`/faculty/search/${encodeURIComponent(query)}`),

  // Get faculty statistics
  getStats: (id) => axios.get(`/faculty/${id}/stats`)
};