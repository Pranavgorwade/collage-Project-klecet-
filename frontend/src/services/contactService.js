import axios from '../utils/axios';

// Contact API calls
export const contactAPI = {
  // Submit contact form
  submit: (data) => axios.post('/contact', data),

  // Get all contact submissions (admin only)
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return axios.get(`/contact${queryString ? `?${queryString}` : ''}`);
  },

  // Get contact by ID (admin only)
  getById: (id) => axios.get(`/contact/${id}`),

  // Update contact status (admin only)
  updateStatus: (id, data) => axios.put(`/contact/${id}/status`, data),

  // Respond to contact (admin only)
  respond: (id, data) => axios.put(`/contact/${id}/respond`, data),

  // Delete contact (admin only)
  delete: (id) => axios.delete(`/contact/${id}`),

  // Get contact statistics (admin only)
  getStats: () => axios.get('/contact/stats/overview')
};