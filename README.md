# Campus Connect - College Management System

A modern, full-stack college website built with React, Vite, Express, and MongoDB. This project provides a comprehensive platform for college information management, student interactions, and administrative features.

## 📋 Project Overview

Campus Connect is a professional full-stack application for managing college operations including:
- **Student Authentication**: Secure signup/login system
- **Departments & Courses**: Browse academic programs
- **Faculty Directory**: View faculty information and details
- **News & Events**: Stay updated with college events and announcements
- **Placements**: Track placement statistics and opportunities
- **Admin Dashboard**: Manage college content and users
- **Contact Management**: Handle student inquiries

## 🏗️ Project Structure

```
campus-connect/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React Context (AuthContext)
│   │   ├── services/     # API service modules
│   │   ├── utils/        # Utility functions (axios config)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/           # Express API server
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware (auth, validation)
│   ├── server.js      # Express server entry point
│   ├── seed.js        # Database seeding script
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** (Local or MongoDB Atlas) - [Setup Guide](https://www.mongodb.com/docs/manual/installation/)

### Installation & Setup

#### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/campus-connect.git
cd campus-connect
```

#### 2. **Setup Backend**

```bash
cd backend

# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env
```

**Edit `backend/.env`** with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/college-db
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
# ... (fill in other variables)
```

#### 3. **Setup Frontend**

In a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file from .env.example
cp .env.example .env.local
```

**Edit `frontend/.env.local`** (update if backend runs on different URL):
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🏃 Running the Application

### **Start Backend Server**

```bash
cd backend
npm start
```

Expected output:
```
MongoDB connected
Server is running on http://localhost:5000
```

**For development** (with auto-reload):
```bash
npm run dev
```

### **Start Frontend Development Server**

In a new terminal:

```bash
cd frontend
npm run dev
```

Your app will open at: **http://localhost:5173**

Backend API is available at: **http://localhost:5000/api**

---

## 📦 Available Scripts

### **Backend Scripts**

```bash
npm start        # Run production server
npm run dev      # Run with nodemon (auto-reload)
npm run seed     # Seed database with sample data
npm test         # Run tests (if configured)
```

### **Frontend Scripts**

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🔌 API Endpoints

All API requests should include: `Authorization: Bearer {token}` header (except auth endpoints)

### **Authentication** (`/api/auth`)
- `POST /register` - Register new student
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /me` - Get current user profile

### **Departments** (`/api/departments`)
- `GET /` - Get all departments
- `GET /:id` - Get department details
- `POST /` - Create department (Admin)
- `PUT /:id` - Update department (Admin)
- `DELETE /:id` - Delete department (Admin)

### **Courses** (`/api/courses`)
- `GET /` - Get all courses
- `GET /department/:deptId` - Get courses by department
- `POST /` - Create course (Admin)

### **Faculty** (`/api/faculty`)
- `GET /` - Get all faculty
- `GET /department/:deptId` - Get faculty by department
- `POST /` - Add faculty (Admin)

### **Events** (`/api/events`)
- `GET /` - Get all upcoming events
- `POST /` - Create event (Admin)

### **Contact** (`/api/contact`)
- `POST /` - Submit contact form

---

## 🔐 Environment Variables

### **Backend (.env)**
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_*` - File upload configuration

### **Frontend (.env.local)**
- `VITE_API_URL` - Backend API base URL
- `VITE_DEBUG` - Enable debug mode

---

## 🗄️ Database Setup

### **Option 1: Local MongoDB**
```bash
# Install MongoDB Community
# On Windows: Use MongoDB installer or
choco install mongodb-community

# Start MongoDB service
net start MongoDB
```

### **Option 2: MongoDB Atlas (Cloud)**
1. Create account at [mongodb.com/cloud](https://mongodb.com/cloud)
2. Create a cluster and get connection string
3. Update `MONGODB_URI` in backend `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/college-db
   ```

### **Seed Sample Data**
```bash
cd backend
npm run seed
```

This creates sample departments, courses, faculty, and an admin user.

---

## 🔧 Troubleshooting

### **"Cannot find module" errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **MongoDB connection failed**
- Ensure MongoDB is running: `mongosh` (MongoDB Shell)
- Check `MONGODB_URI` in `.env`
- Verify network connectivity for MongoDB Atlas

### **CORS errors**
- Ensure backend is running on correct port
- Check `CORS_ORIGIN` in backend `.env` includes frontend URL
- Verify `VITE_API_URL` in frontend `.env.local` matches backend

### **Port already in use**
```bash
# Windows: Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti :5000 | xargs kill -9
```

### **Vite server won't start**
- Check if port 5173 is available
- Clear `.vite` cache: `rm -rf .vite`
- Update vite: `npm install @vitejs/plugin-react@latest vite@latest`

---

## 📚 Tech Stack

### **Frontend**
- React 18 - UI library
- Vite - Build tool and dev server
- React Router v6 - Client-side routing
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client
- Framer Motion - Animations
- Lucide React - Icon library
- React Hot Toast - Toast notifications

### **Backend**
- Express - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB ODM
- JWT - Authentication
- Bcryptjs - Password hashing
- Express Validator - Input validation
- Multer - File uploads
- Cloudinary - Cloud file storage

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add your feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Create a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👥 Author

**KLE College**

For questions or issues, please create an issue in the repository.

---

## 📞 Support

- **Documentation**: Check each folder's README for detailed setup
- **Issues**: Report bugs on GitHub Issues
- **Email**: support@college.edu

---

**Quick Reference for Running:**
```bash
# Terminal 1: Start Backend
cd backend && npm install && npm start

# Terminal 2: Start Frontend  
cd frontend && npm install && npm run dev

# Open http://localhost:5173 in your browser
```

---

**Last Updated**: April 2026
**Version**: 1.0.0
