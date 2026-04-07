const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Department = require('./models/Department');
const Course = require('./models/Course');
const Faculty = require('./models/Faculty');
const Event = require('./models/Event');
const User = require('./models/User');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/college-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log('MongoDB connection error:', err));

// Sample data based on KLE College information
const sampleData = {
  // Admin user
  adminUser: {
    name: 'Admin User',
    email: 'admin@klecet.edu.in',
    password: 'admin123', // Will be hashed
    role: 'admin'
  },

  // Departments
  departments: [
    {
      name: 'Computer Science and Engineering',
      shortName: 'CSE',
      description: 'Department of Computer Science and Engineering offers comprehensive programs in software development, algorithms, data structures, and emerging technologies.',
      hod: null, // Will be set after faculty creation
      established: 2008,
      labs: [
        {
          name: 'Programming Lab',
          description: 'Equipped with latest computers and development tools',
          equipment: ['Computers', 'Projectors', 'Development Software']
        },
        {
          name: 'Data Structures Lab',
          description: 'Dedicated lab for algorithm implementation and analysis',
          equipment: ['Computers', 'Debugging Tools', 'Performance Analyzers']
        }
      ],
      achievements: [
        'NBA Accredited',
        'Research Excellence Award 2023',
        'Best Placement Record 2022-23'
      ],
      studentCount: 480,
      facultyCount: 25
    },
    {
      name: 'Electronics and Communication Engineering',
      shortName: 'ECE',
      description: 'Department of Electronics and Communication Engineering focuses on electronic circuits, communication systems, signal processing, and embedded systems.',
      hod: null,
      established: 2008,
      labs: [
        {
          name: 'Analog Electronics Lab',
          description: 'Lab for analog circuit design and testing',
          equipment: ['Oscilloscopes', 'Function Generators', 'Multimeters']
        },
        {
          name: 'Digital Electronics Lab',
          description: 'Digital circuit design and implementation lab',
          equipment: ['Logic Analyzers', 'Digital Trainers', 'FPGA Boards']
        }
      ],
      achievements: [
        'NBA Accredited',
        'IoT Innovation Center',
        'Best Project Award 2023'
      ],
      studentCount: 360,
      facultyCount: 20
    },
    {
      name: 'Mechanical Engineering',
      shortName: 'ME',
      description: 'Department of Mechanical Engineering provides education in design, manufacturing, thermal engineering, and automotive systems.',
      hod: null,
      established: 2008,
      labs: [
        {
          name: 'CAD/CAM Lab',
          description: 'Computer-aided design and manufacturing lab',
          equipment: ['CAD Software', 'CNC Machines', '3D Printers']
        },
        {
          name: 'Thermal Engineering Lab',
          description: 'Heat transfer and thermodynamics lab',
          equipment: ['Heat Exchangers', 'Boilers', 'Thermal Analyzers']
        }
      ],
      achievements: [
        'NBA Accredited',
        'Industry Collaboration Excellence',
        'Innovation in Design Award'
      ],
      studentCount: 320,
      facultyCount: 18
    },
    {
      name: 'Civil Engineering',
      shortName: 'CE',
      description: 'Department of Civil Engineering covers structural engineering, construction technology, environmental engineering, and transportation engineering.',
      hod: null,
      established: 2008,
      labs: [
        {
          name: 'Concrete Technology Lab',
          description: 'Concrete testing and material analysis lab',
          equipment: ['Compression Testing Machine', 'Mixers', 'Curing Tanks']
        },
        {
          name: 'Surveying Lab',
          description: 'Land surveying and mapping lab',
          equipment: ['Total Stations', 'GPS Devices', 'Leveling Instruments']
        }
      ],
      achievements: [
        'NBA Accredited',
        'Green Building Certification',
        'Best Infrastructure Award'
      ],
      studentCount: 280,
      facultyCount: 16
    },
    {
      name: 'Electrical and Electronics Engineering',
      shortName: 'EEE',
      description: 'Department of Electrical and Electronics Engineering deals with power systems, control systems, and electrical machines.',
      hod: null,
      established: 2008,
      labs: [
        {
          name: 'Electrical Machines Lab',
          description: 'Electrical machines and drives lab',
          equipment: ['Motors', 'Generators', 'Power Analyzers']
        },
        {
          name: 'Power Systems Lab',
          description: 'Power system analysis and protection lab',
          equipment: ['Relays', 'Transformers', 'Protection Systems']
        }
      ],
      achievements: [
        'NBA Accredited',
        'Smart Grid Research Center',
        'Energy Efficiency Award'
      ],
      studentCount: 240,
      facultyCount: 14
    }
  ],

  // Faculty members
  faculty: [
    {
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@klecet.edu.in',
      phone: '+91-1234567890',
      designation: 'HOD',
      department: null, // Will be set to CSE
      specialization: 'Machine Learning, Data Science',
      experience: 15,
      qualifications: ['PhD in Computer Science', 'M.Tech in CSE', 'B.Tech in CSE'],
      publications: [
        'Machine Learning Applications in Healthcare - IEEE 2023',
        'Big Data Analytics for Smart Cities - Springer 2022'
      ],
      projects: [
        'AI-Powered Healthcare Diagnostic System',
        'Smart Campus Management System'
      ]
    },
    {
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@klecet.edu.in',
      phone: '+91-1234567891',
      designation: 'Professor',
      department: null, // Will be set to CSE
      specialization: 'Computer Networks, Cybersecurity',
      experience: 12,
      qualifications: ['PhD in Computer Science', 'M.Tech in CSE'],
      publications: [
        'Network Security Protocols - ACM 2023',
        'IoT Security Challenges - Elsevier 2022'
      ],
      projects: [
        'Secure IoT Framework',
        'Network Intrusion Detection System'
      ]
    },
    {
      name: 'Prof. Amit Singh',
      email: 'amit.singh@klecet.edu.in',
      phone: '+91-1234567892',
      designation: 'Associate Professor',
      department: null, // Will be set to ECE
      specialization: 'VLSI Design, Embedded Systems',
      experience: 10,
      qualifications: ['M.Tech in VLSI', 'B.Tech in ECE'],
      publications: [
        'Low Power VLSI Design - IEEE 2023',
        'Embedded System Design - Springer 2022'
      ],
      projects: [
        'FPGA-based Signal Processor',
        'IoT Device Development'
      ]
    }
  ],

  // Courses
  courses: [
    {
      name: 'Data Structures and Algorithms',
      code: 'CSE101',
      description: 'Fundamental concepts of data structures and algorithms, including arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
      department: null, // Will be set to CSE
      faculty: null, // Will be set to faculty
      semester: 3,
      credits: 4,
      type: 'Core',
      prerequisites: []
    },
    {
      name: 'Database Management Systems',
      code: 'CSE201',
      description: 'Comprehensive study of database design, SQL, normalization, transaction management, and database security.',
      department: null, // Will be set to CSE
      faculty: null, // Will be set to faculty
      semester: 4,
      credits: 4,
      type: 'Core',
      prerequisites: ['CSE101']
    },
    {
      name: 'Machine Learning',
      code: 'CSE301',
      description: 'Introduction to machine learning algorithms, supervised and unsupervised learning, neural networks, and practical applications.',
      department: null, // Will be set to CSE
      faculty: null, // Will be set to faculty
      semester: 6,
      credits: 3,
      type: 'Elective',
      prerequisites: ['CSE201', 'MAT201']
    },
    {
      name: 'Digital Electronics',
      code: 'ECE101',
      description: 'Study of digital logic circuits, combinational and sequential circuits, and digital system design.',
      department: null, // Will be set to ECE
      faculty: null, // Will be set to faculty
      semester: 3,
      credits: 4,
      type: 'Core',
      prerequisites: []
    }
  ],

  // Events
  events: [
    {
      title: 'Annual Technical Fest - TECHFEST 2024',
      description: 'Annual technical festival featuring competitions, workshops, and seminars on latest technologies.',
      type: 'Technical',
      date: new Date('2024-03-15'),
      time: '09:00',
      location: 'College Auditorium & Labs',
      capacity: 500,
      organizer: null, // Will be set to admin
      status: 'Active',
      registrationDeadline: new Date('2024-03-10'),
      details: {
        agenda: [
          'Opening Ceremony',
          'Technical Competitions',
          'Guest Lectures',
          'Project Exhibition',
          'Closing Ceremony'
        ],
        speakers: ['Industry Experts', 'Alumni'],
        prizes: 'Worth ₹2,00,000'
      }
    },
    {
      title: 'Placement Drive - TCS',
      description: 'Campus recruitment drive by Tata Consultancy Services for final year students.',
      type: 'Placement',
      date: new Date('2024-02-20'),
      time: '10:00',
      location: 'Seminar Hall',
      capacity: 200,
      organizer: null, // Will be set to admin
      status: 'Active',
      registrationDeadline: new Date('2024-02-15'),
      details: {
        company: 'Tata Consultancy Services',
        eligibility: 'B.Tech Final Year Students',
        packages: '₹6-8 LPA',
        roles: ['Software Engineer', 'System Engineer']
      }
    },
    {
      title: 'Workshop on AI & ML',
      description: 'Hands-on workshop on Artificial Intelligence and Machine Learning using Python and TensorFlow.',
      type: 'Workshop',
      date: new Date('2024-01-25'),
      time: '14:00',
      location: 'Computer Lab 1',
      capacity: 50,
      organizer: null, // Will be set to admin
      status: 'Active',
      registrationDeadline: new Date('2024-01-20'),
      details: {
        duration: '3 hours',
        prerequisites: 'Basic Python knowledge',
        topics: ['Introduction to AI', 'ML Algorithms', 'Neural Networks', 'TensorFlow Basics']
      }
    }
  ]
};

// Seeding function
async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Department.deleteMany({});
    await Faculty.deleteMany({});
    await Course.deleteMany({});
    await Event.deleteMany({});

    console.log('Cleared existing data');

    // Create admin user
    const hashedPassword = await require('bcryptjs').hash(sampleData.adminUser.password, 10);
    const adminUser = new User({
      ...sampleData.adminUser,
      password: hashedPassword
    });
    await adminUser.save();
    console.log('Admin user created');

    // Create departments
    const departments = [];
    for (const deptData of sampleData.departments) {
      const department = new Department(deptData);
      await department.save();
      departments.push(department);
    }
    console.log('Departments created');

    // Create faculty
    const faculty = [];
    for (let i = 0; i < sampleData.faculty.length; i++) {
      const facultyData = sampleData.faculty[i];
      facultyData.department = departments[i % departments.length]._id; // Assign to departments
      const facultyMember = new Faculty(facultyData);
      await facultyMember.save();
      faculty.push(facultyMember);
    }
    console.log('Faculty created');

    // Update department HODs
    for (let i = 0; i < departments.length; i++) {
      if (faculty[i]) {
        departments[i].hod = faculty[i]._id;
        await departments[i].save();
      }
    }
    console.log('Department HODs updated');

    // Create courses
    const courses = [];
    for (const courseData of sampleData.courses) {
      courseData.department = departments[0]._id; // Assign to CSE department
      courseData.faculty = faculty[0]._id; // Assign to first faculty
      const course = new Course(courseData);
      await course.save();
      courses.push(course);
    }
    console.log('Courses created');

    // Create events
    for (const eventData of sampleData.events) {
      eventData.organizer = adminUser._id;
      const event = new Event(eventData);
      await event.save();
    }
    console.log('Events created');

    console.log('Database seeding completed successfully!');
    console.log(`Created:`);
    console.log(`- 1 Admin user`);
    console.log(`- ${departments.length} Departments`);
    console.log(`- ${faculty.length} Faculty members`);
    console.log(`- ${courses.length} Courses`);
    console.log(`- ${sampleData.events.length} Events`);

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
}

// Run seeding
seedDatabase();