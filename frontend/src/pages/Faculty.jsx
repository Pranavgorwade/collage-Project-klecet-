import { motion } from 'framer-motion';
import { Mail, Phone, Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Darshankumar D. Billur',
      designation: 'Principal',
      department: 'Administration',
      qualification: 'M.Tech., Ph.D.',
      experience: '15+ years',
      email: 'principal@klecet.edu.in',
      phone: '+91 8338 257100',
      image: '/api/placeholder/150/150',
      specialization: 'Computer Science, Administration'
    },
    {
      name: 'Dr. XYZ Kumar',
      designation: 'Professor & HOD',
      department: 'Computer Science & Engineering',
      qualification: 'Ph.D. Computer Science',
      experience: '12+ years',
      email: 'hod.cse@klecet.edu.in',
      phone: '+91 8338 257101',
      image: '/api/placeholder/150/150',
      specialization: 'Artificial Intelligence, Machine Learning'
    },
    {
      name: 'Dr. ABC Sharma',
      designation: 'Professor & HOD',
      department: 'Electronics & Communication Engineering',
      qualification: 'Ph.D. Electronics',
      experience: '14+ years',
      email: 'hod.ece@klecet.edu.in',
      phone: '+91 8338 257102',
      image: '/api/placeholder/150/150',
      specialization: 'VLSI Design, Embedded Systems'
    },
    {
      name: 'Dr. PQR Rao',
      designation: 'Professor & HOD',
      department: 'Mechanical Engineering',
      qualification: 'Ph.D. Mechanical Engineering',
      experience: '16+ years',
      email: 'hod.mech@klecet.edu.in',
      phone: '+91 8338 257103',
      image: '/api/placeholder/150/150',
      specialization: 'Thermal Engineering, CAD/CAM'
    },
    {
      name: 'Dr. LMN Patel',
      designation: 'Professor & HOD',
      department: 'Civil Engineering',
      qualification: 'Ph.D. Civil Engineering',
      experience: '13+ years',
      email: 'hod.civil@klecet.edu.in',
      phone: '+91 8338 257104',
      image: '/api/placeholder/150/150',
      specialization: 'Structural Engineering, Geotechnical'
    },
    {
      name: 'Dr. OPQ Singh',
      designation: 'Professor & HOD',
      department: 'Master of Business Administration',
      qualification: 'Ph.D. Management',
      experience: '11+ years',
      email: 'hod.mba@klecet.edu.in',
      phone: '+91 8338 257105',
      image: '/api/placeholder/150/150',
      specialization: 'Business Strategy, Entrepreneurship'
    },
    {
      name: 'Prof. RST Jain',
      designation: 'Associate Professor',
      department: 'Computer Science & Engineering',
      qualification: 'M.Tech. Computer Science',
      experience: '8+ years',
      email: 'rst.jain@klecet.edu.in',
      phone: '+91 8338 257106',
      image: '/api/placeholder/150/150',
      specialization: 'Data Structures, Algorithms'
    },
    {
      name: 'Prof. UVW Reddy',
      designation: 'Associate Professor',
      department: 'Electronics & Communication Engineering',
      qualification: 'M.Tech. Electronics',
      experience: '9+ years',
      email: 'uvw.reddy@klecet.edu.in',
      phone: '+91 8338 257107',
      image: '/api/placeholder/150/150',
      specialization: 'Digital Signal Processing'
    },
    {
      name: 'Prof. YZA Kumar',
      designation: 'Assistant Professor',
      department: 'Mechanical Engineering',
      qualification: 'M.Tech. Mechanical',
      experience: '6+ years',
      email: 'yza.kumar@klecet.edu.in',
      phone: '+91 8338 257108',
      image: '/api/placeholder/150/150',
      specialization: 'Fluid Mechanics, Heat Transfer'
    }
  ];

  const stats = [
    { number: '85+', label: 'Faculty Members' },
    { number: '45+', label: 'Ph.D. Holders' },
    { number: '25+', label: 'Publications' },
    { number: '15+', label: 'Research Projects' }
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
            Our Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Experienced educators and researchers committed to academic excellence
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
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

      {/* Faculty Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {faculty.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {faculty.name}
                </h3>
                <p className="text-primary-500 font-semibold mb-2">
                  {faculty.designation}
                </p>
                <p className="text-secondary-500 font-medium mb-3">
                  {faculty.department}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    {faculty.qualification}
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    {faculty.experience}
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    {faculty.specialization}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={`tel:${faculty.phone}`}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Faculty Development
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Continuous learning and professional growth initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Research & Publications',
                description: 'Active participation in research with publications in reputed journals and conferences.',
                icon: '📚'
              },
              {
                title: 'Workshops & Seminars',
                description: 'Regular faculty development programs, workshops, and industry interactions.',
                icon: '🎓'
              },
              {
                title: 'Industry Collaboration',
                description: 'Partnerships with leading companies for collaborative research and training.',
                icon: '🤝'
              },
              {
                title: 'Professional Certifications',
                description: 'Encouragement for obtaining industry-recognized certifications and licenses.',
                icon: '🏆'
              },
              {
                title: 'International Exposure',
                description: 'Opportunities for international conferences, collaborations, and exchange programs.',
                icon: '🌍'
              },
              {
                title: 'Teaching Excellence',
                description: 'Training in modern teaching methodologies and educational technologies.',
                icon: '👨‍🏫'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;