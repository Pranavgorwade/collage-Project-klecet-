import { motion } from 'framer-motion';
import { Clock, Users, Award, BookOpen, CheckCircle } from 'lucide-react';

const Courses = () => {
  const ugCourses = [
    {
      name: 'Bachelor of Engineering in Computer Science & Engineering',
      code: 'BE-CSE',
      duration: '4 Years',
      seats: 120,
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      highlights: ['AI & ML Focus', 'Industry Projects', 'Research Opportunities']
    },
    {
      name: 'Bachelor of Engineering in Electronics & Communication',
      code: 'BE-ECE',
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      highlights: ['Embedded Systems', 'Communication Networks', 'IoT Applications']
    },
    {
      name: 'Bachelor of Engineering in Mechanical Engineering',
      code: 'BE-MECH',
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      highlights: ['CAD/CAM', 'Automotive Design', 'Manufacturing']
    },
    {
      name: 'Bachelor of Engineering in Civil Engineering',
      code: 'BE-CIVIL',
      duration: '4 Years',
      seats: 60,
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      highlights: ['Sustainable Construction', 'Urban Planning', 'Structural Design']
    }
  ];

  const pgCourses = [
    {
      name: 'Master of Technology in Computer Science',
      code: 'M.Tech-CSE',
      duration: '2 Years',
      seats: 18,
      eligibility: 'BE/B.Tech in CSE/IT or equivalent',
      highlights: ['Advanced Algorithms', 'Research Focus', 'Industry Collaboration']
    },
    {
      name: 'Master of Technology in Electronics & Communication',
      code: 'M.Tech-ECE',
      duration: '2 Years',
      seats: 18,
      eligibility: 'BE/B.Tech in ECE/EEE or equivalent',
      highlights: ['VLSI Design', 'Wireless Communication', 'Signal Processing']
    },
    {
      name: 'Master of Business Administration',
      code: 'MBA',
      duration: '2 Years',
      seats: 60,
      eligibility: 'Bachelor\'s degree in any discipline',
      highlights: ['Business Analytics', 'Entrepreneurship', 'Leadership Development']
    }
  ];

  const diplomaCourses = [
    {
      name: 'Diploma in Computer Science',
      code: 'DCS',
      duration: '3 Years',
      seats: 60,
      eligibility: '10th Standard',
      highlights: ['Programming Skills', 'Software Development', 'IT Support']
    },
    {
      name: 'Diploma in Electronics & Communication',
      code: 'DECE',
      duration: '3 Years',
      seats: 60,
      eligibility: '10th Standard',
      highlights: ['Electronic Circuits', 'Communication Systems', 'Maintenance']
    },
    {
      name: 'Diploma in Mechanical Engineering',
      code: 'DME',
      duration: '3 Years',
      seats: 60,
      eligibility: '10th Standard',
      highlights: ['Machine Design', 'Manufacturing', 'CAD Tools']
    }
  ];

  const CourseCard = ({ course, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {course.name}
        </h3>
        <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
          {course.code}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-primary-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{course.duration}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-5 w-5 text-secondary-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{course.seats} Seats</span>
        </div>
        <div className="flex items-center">
          <Award className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">Approved</span>
        </div>
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
          <span className="text-sm text-gray-600 dark:text-gray-300">VTU</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Eligibility</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{course.eligibility}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Highlights</h4>
        <ul className="space-y-1">
          {course.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

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
            Academic Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive engineering and management education approved by VTU and AICTE
          </motion.p>
        </div>
      </section>

      {/* UG Courses */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Four-year engineering programs leading to B.E. degree
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ugCourses.map((course, index) => (
              <CourseCard key={course.code} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PG Courses */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Postgraduate Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced studies and research opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pgCourses.map((course, index) => (
              <CourseCard key={course.code} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Diploma Courses */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Diploma Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Three-year technical education programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {diplomaCourses.map((course, index) => (
              <CourseCard key={course.code} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How to join KLE College
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Eligibility Check',
                description: 'Ensure you meet the academic requirements for your desired program.'
              },
              {
                step: '02',
                title: 'Entrance Exam',
                description: 'Appear for CET/COMEDK or other relevant entrance examinations.'
              },
              {
                step: '03',
                title: 'Application',
                description: 'Submit your application through the official admission portal.'
              },
              {
                step: '04',
                title: 'Counseling',
                description: 'Participate in counseling sessions for seat allotment.'
              },
              {
                step: '05',
                title: 'Document Verification',
                description: 'Complete document verification and fee payment.'
              },
              {
                step: '06',
                title: 'Welcome to KLE',
                description: 'Join our vibrant academic community!'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;