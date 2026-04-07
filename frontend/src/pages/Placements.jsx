import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Building, Star } from 'lucide-react';

const Placements = () => {
  const placementStats = [
    { number: '303+', label: 'Students Placed (2025-26)', icon: Users },
    { number: '100%', label: 'Job Assistance Rate', icon: TrendingUp },
    { number: '25+', label: 'Partner Companies', icon: Building },
    { number: '8 LPA', label: 'Highest Package', icon: Award }
  ];

  const recruiters = [
    'Infosys', 'TCS', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini',
    'BYJU\'S', 'Tech Mahindra', 'Mindtree', 'IBM', 'Oracle', 'Microsoft',
    'Amazon', 'Flipkart', 'Paytm', 'Zomato', 'Ola', 'Swiggy'
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'Infosys',
      package: '6.5 LPA',
      department: 'CSE',
      message: 'KLE College provided excellent training and placement support. The campus recruitment process was smooth and I got placed in my dream company.'
    },
    {
      name: 'Priya Patel',
      company: 'TCS',
      package: '7.2 LPA',
      department: 'ECE',
      message: 'The faculty guidance and industry exposure at KLE helped me secure a great job. The placement cell is very supportive and professional.'
    },
    {
      name: 'Amit Kumar',
      company: 'BYJU\'S',
      package: '8.0 LPA',
      department: 'MBA',
      message: 'Outstanding placement record and excellent infrastructure. The college\'s focus on holistic development really paid off.'
    }
  ];

  const placementProcess = [
    {
      step: '01',
      title: 'Pre-Placement Training',
      description: 'Aptitude training, technical skills, communication skills, and mock interviews.'
    },
    {
      step: '02',
      title: 'Resume Building',
      description: 'Professional resume creation and LinkedIn profile optimization.'
    },
    {
      step: '03',
      title: 'Company Coordination',
      description: 'Campus recruitment drives and coordination with partner companies.'
    },
    {
      step: '04',
      title: 'Interview Preparation',
      description: 'Technical and HR interview preparation with industry experts.'
    },
    {
      step: '05',
      title: 'Placement Assistance',
      description: 'One-on-one career counseling and job search guidance.'
    },
    {
      step: '06',
      title: 'Post-Placement Support',
      description: 'Alumni network and career progression guidance.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Placements & Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your gateway to successful careers with 100% placement assistance
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Recruiters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Leading companies that trust our students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recruiters.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Placement Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive support throughout your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from our placed students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary-500 text-sm">
                      {testimonial.company} • {testimonial.package}
                    </p>
                    <p className="text-secondary-500 text-sm">
                      {testimonial.department}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.message}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready for Your Dream Job?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Connect with our placement cell for personalized career guidance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:placements@klecet.edu.in"
              className="btn-secondary bg-white/10 hover:bg-white/20 border-2 border-white"
            >
              Contact Placement Cell
            </a>
            <a
              href="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Get Career Counseling
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Placements;