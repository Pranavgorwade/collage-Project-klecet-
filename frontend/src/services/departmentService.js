import axios from '../utils/axios';

// Department API calls
export const departmentAPI = {
  // Get all departments
  getAll: () => axios.get('/departments'),

  // Get department by ID
  getById: (id) => axios.get(`/departments/${id}`),

  // Create department (admin only)
  create: (data) => axios.post('/departments', data),

  // Update department (admin only)
  update: (id, data) => axios.put(`/departments/${id}`, data),

  // Delete department (admin only)
  delete: (id) => axios.delete(`/departments/${id}`),

  // Get department statistics
  getStats: (id) => axios.get(`/departments/${id}/stats`)
};