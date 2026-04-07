import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Users, BookOpen, Calendar, Settings, LogOut, Plus,
  Edit, Trash2, Eye, BarChart3, FileText, Image
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, this would come from API
  const stats = [
    { title: 'Total Students', value: '3600', icon: Users, color: 'text-blue-500' },
    { title: 'Faculty Members', value: '85', icon: BookOpen, color: 'text-green-500' },
    { title: 'Active Courses', value: '25', icon: FileText, color: 'text-purple-500' },
    { title: 'Events This Month', value: '12', icon: Calendar, color: 'text-orange-500' }
  ];

  const recentActivities = [
    { action: 'New student registered', user: 'Rahul Sharma', time: '2 hours ago' },
    { action: 'Course updated', user: 'Dr. Kumar', time: '4 hours ago' },
    { action: 'Event created', user: 'Admin', time: '1 day ago' },
    { action: 'Faculty profile updated', user: 'Dr. Patel', time: '2 days ago' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Manage Students', icon: Users },
    { id: 'courses', label: 'Manage Courses', icon: BookOpen },
    { id: 'faculty', label: 'Manage Faculty', icon: Users },
    { id: 'events', label: 'Manage Events', icon: Calendar },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h2>
              <p className="text-blue-100">Manage your college administration efficiently</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">by {activity.user}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setActiveTab('students')}
                  className="flex flex-col items-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                >
                  <Plus className="h-6 w-6 text-primary-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Add Student</span>
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="flex flex-col items-center p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-900/30 transition-colors duration-200"
                >
                  <BookOpen className="h-6 w-6 text-secondary-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Add Course</span>
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200"
                >
                  <Calendar className="h-6 w-6 text-green-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Create Event</span>
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                >
                  <FileText className="h-6 w-6 text-purple-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Update Content</span>
                </button>
              </div>
            </motion.div>
          </div>
        );

      case 'students':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Students</h2>
              <button className="btn-primary flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Student
              </button>
            </div>

            <div className="card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Department</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Rahul Sharma', email: 'rahul@example.com', department: 'CSE', status: 'Active' },
                      { name: 'Priya Patel', email: 'priya@example.com', department: 'ECE', status: 'Active' },
                      { name: 'Amit Kumar', email: 'amit@example.com', department: 'MECH', status: 'Inactive' }
                    ].map((student, index) => (
                      <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{student.name}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{student.email}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{student.department}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            student.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="p-1 text-blue-500 hover:text-blue-700">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-yellow-500 hover:text-yellow-700">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-red-500 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Courses</h2>
              <button className="btn-primary flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Course
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Data Structures', code: 'CS101', department: 'CSE', students: 120 },
                { name: 'Digital Electronics', code: 'EC201', department: 'ECE', students: 90 },
                { name: 'Thermodynamics', code: 'ME301', department: 'MECH', students: 85 }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{course.name}</h3>
                  <p className="text-primary-500 font-medium mb-2">{course.code}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{course.department}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{course.students} students</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">Edit</button>
                    <button className="p-2 text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Events</h2>
              <button className="btn-primary flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Create New Event
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Technical Symposium", date: "April 5, 2026", type: "Technical", status: "Upcoming" },
                { title: "Women's Day Celebration", date: "March 8, 2026", type: "Cultural", status: "Completed" },
                { title: "Placement Drive", date: "March 20, 2026", type: "Career", status: "Ongoing" }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      event.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{event.date}</p>
                  <p className="text-primary-500 text-sm mb-4">{event.type}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">Edit</button>
                    <button className="p-2 text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Website Content</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="font-medium text-gray-900 dark:text-white">Homepage Banner</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Update hero section content</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="font-medium text-gray-900 dark:text-white">About Section</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Edit college information</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="font-medium text-gray-900 dark:text-white">Contact Details</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Update contact information</div>
                  </button>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Media Management</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex items-center">
                      <Image className="h-5 w-5 mr-3 text-primary-500" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Gallery Images</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Upload event photos</div>
                      </div>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-secondary-500" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Documents</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Manage PDFs and resources</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="card sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {user?.name?.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user?.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full text-sm font-medium mt-2">
                  Administrator
                </span>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;