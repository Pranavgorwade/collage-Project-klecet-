import axios from '../utils/axios';

// Event API calls
export const eventAPI = {
  // Get all events with optional filters
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return axios.get(`/events${queryString ? `?${queryString}` : ''}`);
  },

  // Get event by ID
  getById: (id) => axios.get(`/events/${id}`),

  // Create event (admin only)
  create: (data) => axios.post('/events', data),

  // Update event (admin only)
  update: (id, data) => axios.put(`/events/${id}`, data),

  // Delete event (admin only)
  delete: (id) => axios.delete(`/events/${id}`),

  // Register for event
  register: (id) => axios.post(`/events/${id}/register`),

  // Unregister from event
  unregister: (id) => axios.delete(`/events/${id}/register`),

  // Get upcoming events
  getUpcoming: () => axios.get('/events/upcoming/all'),

  // Get events by type
  getByType: (type) => axios.get(`/events/type/${type}`),

  // Search events
  search: (query) => axios.get(`/events/search/${encodeURIComponent(query)}`),

  // Get event statistics (admin only)
  getStats: (id) => axios.get(`/events/${id}/stats`)
};