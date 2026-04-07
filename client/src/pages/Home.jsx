import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, BookOpen, TrendingUp, Loader } from 'lucide-react';
import { departmentAPI } from '../services/departmentService';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const highlights = [
    {
      icon: Award,
      title: '110 Years',
      description: 'Legacy of educational excellence',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: '3600+',
      description: 'Students enrolled',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: BookOpen,
      title: '7 Core',
      description: 'Engineering branches',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: TrendingUp,
      title: '316+',
      description: 'Institutions under KLE Society',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const announcements = [
    "Admission for 2024-25 batch is now open",
    "New research center inaugurated",
    "International conference on AI scheduled for March",
    "Sports meet results announced"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await departmentAPI.getAll();
        setDepartments(response.data.slice(0, 3)); // Show first 3 departments
      } catch (error) {
        console.error('Error fetching departments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }}
          ></motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              KLE College
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Shaping Tomorrow's Engineers Through Innovation, Excellence, and Technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/courses" className="btn-primary text-lg px-8 py-4">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white">
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </motion.div>
      </section>

      {/* Announcements Ticker */}
      <section className="bg-primary-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">📢 Latest Updates:</span>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              {announcements[currentSlide]}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose KLE College?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover what makes us one of the leading engineering institutions in the region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our diverse range of engineering disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 flex justify-center py-8">
                <Loader className="h-8 w-8 animate-spin text-primary-500" />
              </div>
            ) : (
              departments.map((dept, index) => (
                <motion.div
                  key={dept._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="card text-center group cursor-pointer"
                >
                  <div className="h-32 rounded-lg mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{dept.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dept.description}
                  </p>
                  <Link
                    to={`/departments/${dept._id}`}
                    className="text-primary-500 hover:text-primary-600 font-semibold inline-flex items-center"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Engineering Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Join thousands of successful engineers who started their career at KLE College
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;