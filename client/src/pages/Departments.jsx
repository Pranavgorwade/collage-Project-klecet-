import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Users, BookOpen, Award, MapPin } from 'lucide-react';

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      hod: 'Dr. XYZ',
      students: 480,
      faculty: 25,
      labs: 8,
      description: 'Leading department offering cutting-edge computer science education with focus on AI, ML, and software development.',
      achievements: ['NBA Accredited', 'Research Center', 'Industry Partnerships'],
      courses: ['B.E. CSE', 'M.Tech CSE', 'Ph.D.'],
      facilities: ['Programming Labs', 'AI Research Lab', 'Data Center', 'Innovation Hub']
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      shortName: 'ECE',
      hod: 'Dr. ABC',
      students: 360,
      faculty: 20,
      labs: 6,
      description: 'Specialized in electronics, communication systems, and embedded technologies.',
      achievements: ['ISO Certified', 'VTU Best Department', 'Industry Collaborations'],
      courses: ['B.E. ECE', 'M.Tech ECE'],
      facilities: ['Embedded Systems Lab', 'Communication Lab', 'VLSI Lab', 'IOT Lab']
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      shortName: 'MECH',
      hod: 'Dr. PQR',
      students: 420,
      faculty: 22,
      labs: 7,
      description: 'Comprehensive mechanical engineering program with focus on design, manufacturing, and automation.',
      achievements: ['NBA Accredited', 'Industry Partnerships', 'Research Projects'],
      courses: ['B.E. Mechanical', 'M.Tech Mechanical'],
      facilities: ['CAD/CAM Lab', 'Thermal Lab', 'Manufacturing Lab', 'Design Studio']
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      shortName: 'CIVIL',
      hod: 'Dr. LMN',
      students: 300,
      faculty: 18,
      labs: 5,
      description: 'Building infrastructure experts with focus on sustainable construction and urban planning.',
      achievements: ['Green Building Certified', 'Research Grants', 'Consultancy Projects'],
      courses: ['B.E. Civil', 'M.Tech Civil'],
      facilities: ['Surveying Lab', 'Concrete Lab', 'Geotechnical Lab', 'CAD Lab']
    },
    {
      id: 'mba',
      name: 'Master of Business Administration',
      shortName: 'MBA',
      hod: 'Dr. OPQ',
      students: 120,
      faculty: 12,
      labs: 2,
      description: 'Business education with focus on management, entrepreneurship, and leadership.',
      achievements: ['AICTE Approved', 'Industry Interface', 'Entrepreneurship Cell'],
      courses: ['MBA (General)', 'MBA (Finance)', 'MBA (HR)'],
      facilities: ['Business Lab', 'Case Study Room', 'Seminar Hall', 'Library']
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
            Our Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Excellence in engineering education across multiple disciplines
          </motion.p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card cursor-pointer group"
                onClick={() => setSelectedDept(dept)}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{dept.shortName}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    HOD: {dept.hod}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Users className="h-6 w-6 text-primary-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dept.students}
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 text-secondary-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dept.faculty}
                    </div>
                    <div className="text-xs text-gray-500">Faculty</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-6 w-6 text-green-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {dept.labs}
                    </div>
                    <div className="text-xs text-gray-500">Labs</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {dept.description}
                </p>

                <div className="flex items-center text-primary-500 font-semibold group-hover:text-primary-600">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDept && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDept(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedDept.name}
                  </h2>
                  <p className="text-primary-500 font-semibold">Head: {selectedDept.hod}</p>
                </div>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    About Department
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedDept.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary-500">{selectedDept.students}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-secondary-500">{selectedDept.faculty}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Faculty</div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Courses Offered</h4>
                  <ul className="space-y-1 mb-6">
                    {selectedDept.courses.map((course, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Achievements
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {selectedDept.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Award className="h-5 w-5 text-yellow-500 mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDept.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                        {facility}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Departments;