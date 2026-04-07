# 🚀 CAMPUS CONNECT - COMPLETE SETUP & QUICK START GUIDE

## ✅ Project Reorganization Complete!

Your Campus Connect project has been professionally reorganized with the following structure:

```
campus-connect/
├── frontend/           # React + Vite application
│   ├── src/
│   ├── package.json
│   ├── .env.example
│   ├── README.md
│   └── ... (all React files)
│
├── backend/            # Express API server
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   ├── .env.example
│   ├── README.md
│   └── .env (created)
│
├── .gitignore          # Git ignore rules
├── README.md           # Main project documentation
└── SETUP_GUIDE.md      # This file
```

---

## 🎯 QUICK START (5 Minutes)

### Step 1: Verify Node.js Installation
```bash
node --version
npm --version
```

Expected: Node v14+ and npm 6+

### Step 2: Open Two Terminal Windows

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm start
```

Expected Output:
```
MongoDB connected
Server is running on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Expected Output:
```
Local: http://localhost:5173/
```

### Step 3: Open Browser
Visit: **http://localhost:5173**

✅ **Your application is now running!**

---

## 📋 COMPLETE SETUP GUIDE

### Prerequisites Checklist
- [ ] Node.js v14.0.0+ installed
- [ ] npm or yarn available
- [ ] Git installed (for version control)
- [ ] MongoDB installed or Atlas account created
- [ ] Code editor (VS Code recommended)

---

## 🔧 SETUP INSTRUCTIONS

### A. MongoDB Setup (Required)

#### Option A1: Local MongoDB

**Windows with Chocolatey:**
```bash
choco install mongodb-community
net start MongoDB
```

**Manual Installation:**
1. Download from [mongodb.com/try/download/community](https://mongodb.com/try/download/community)
2. Install and start MongoDB service

**Verify Connection:**
```bash
mongosh
# Should connect successfully
exit
```

#### Option A2: MongoDB Atlas (Cloud - Recommended for Development)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up (free tier available)
3. Create a cluster
4. Create database user and get connection string
5. Update `.env` in backend:
```env
MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/college-db
```

---

### B. Backend Setup

#### Step 1: Navigate to Backend
```bash
cd backend
```

#### Step 2: Create Environment File
```bash
# Copy example to create actual .env
cp .env.example .env
# On Windows (PowerShell):
Copy-Item .env.example .env
```

#### Step 3: Edit `.env` File
Open `backend/.env` and update:

```env
# Development Configuration
PORT=5000
NODE_ENV=development

# MongoDB (Local or Atlas)
MONGODB_URI=mongodb://localhost:27017/college-db

# JWT (Keep unique for production)
JWT_SECRET=dev-secret-key-change-this-in-production
JWT_EXPIRE=7d

# Cloudinary (for image uploads - optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

#### Step 4: Install Dependencies
```bash
npm install
```

#### Step 5: Seed Sample Data (Optional)
```bash
npm run seed
```

Creates sample:
- Departments
- Courses
- Faculty members
- Events
- Admin user (email: `admin@klecet.edu.in`, password: `admin123`)

#### Step 6: Start Backend
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

✅ Backend running at: **http://localhost:5000**
✅ Health check: **http://localhost:5000/api/health**

---

### C. Frontend Setup

#### Step 1: Navigate to Frontend
```bash
cd frontend
```

#### Step 2: Create Environment File
```bash
# Copy example to create actual .env.local
cp .env.example .env.local
# On Windows (PowerShell):
Copy-Item .env.example .env.local
```

#### Step 3: Edit `.env.local` File
```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api

# Debug mode (set to true for troubleshooting)
VITE_DEBUG=false
```

#### Step 4: Install Dependencies
```bash
npm install
```

#### Step 5: Start Frontend
```bash
npm run dev
```

✅ Frontend running at: **http://localhost:5173**

---

## 🧪 TESTING THE APPLICATION

### 1. Health Check
```bash
# Backend is healthy
curl http://localhost:5000/api/health

# Output:
# { "status": "OK", "message": "Server is running" }
```

### 2. User Registration (Frontend)
- Visit http://localhost:5173/signup
- Create a new account
- Check browser console for any errors

### 3. User Login (Frontend)
- Visit http://localhost:5173/login
- Use credentials from signup
- Should redirect to dashboard

### 4. Admin Access
- Login with:
  - Email: `admin@klecet.edu.in`
  - Password: `admin123`
- Access `/admin` dashboard

### 5. API Testing (Postman or REST Client)

**Register User:**
```http
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "email": "test@college.edu",
  "password": "Test@123",
  "name": "Test User"
}
```

**Get All Departments:**
```http
GET http://localhost:5000/api/departments
```

**Seed Database:**
```bash
cd backend
npm run seed
```

---

## 📁 IMPORTANT FILES & LOCATIONS

| File | Location | Purpose |
|------|----------|---------|
| `.env` | `backend/.env` | Backend configuration |
| `.env.local` | `frontend/.env.local` | Frontend configuration |
| `.env.example` | Both folders | Configuration template |
| `.gitignore` | Root | Git ignore rules |
| `server.js` | `backend/server.js` | Backend entry point |
| `main.jsx` | `frontend/src/main.jsx` | Frontend entry point |

---

## 🔧 PACKAGE.JSON SCRIPTS REFERENCE

### Backend
```bash
npm start      # Production mode
npm run dev    # Development with auto-reload
npm run seed   # Populate sample data
npm test       # Run tests
```

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🐛 TROUBLESHOOTING

### Problem: "Cannot find module"
```bash
# Solution: Clear and reinstall
cd backend  # or frontend
rm -rf node_modules package-lock.json
npm install
```

### Problem: "MongoDB connection failed"
- Is MongoDB running? Start with: `net start MongoDB` (Windows)
- Check `MONGODB_URI` format in `.env`
- Try connecting with: `mongosh`
- For Atlas: Verify IP whitelist in cluster settings

### Problem: "Port 5000/5173 already in use"
```bash
# Windows: Kill process on port
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac: Kill process on port
lsof -ti :5000 | xargs kill -9
```

### Problem: "CORS errors in browser console"
- Check backend `.env`: `CORS_ORIGIN` includes `http://localhost:5173`
- Verify frontend `.env.local`: `VITE_API_URL=http://localhost:5000/api`
- Restart both servers

### Problem: "npm install fails"
```bash
# Clear npm cache
npm cache clean --force
npm install
```

### Problem: "Vite dev server won't start"
```bash
# Clear Vite cache
rm -rf .vite
npm run dev
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Before Uploading to GitHub:

1. **Remove sensitive files:**
   ```bash
   rm backend/.env  # Don't commit actual .env file
   rm frontend/.env.local
   ```

2. **Keep only example files:**
   - `.env.example` (committed)
   - `.env.local.example` (for frontend)

3. **Check repository:**
   ```bash
   git status
   git add .
   git commit -m "Initial project setup - Campus Connect"
   ```

4. **Push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/yourusername/campus-connect.git
   git push -u origin main
   ```

### For Production Deployment:

**Backend (Heroku/Railway/Render):**
- Set production environment variables in platform dashboard
- Use MongoDB Atlas (cloud database)
- Set `NODE_ENV=production`

**Frontend (Vercel/Netlify):**
- Build: `npm run build`
- Deploy `dist/` folder
- Set `VITE_API_URL=https://your-api-domain.com/api`

---

## 📚 DOCUMENTATION FILES

- `README.md` - Main project documentation
- `backend/README.md` - Backend API documentation
- `frontend/README.md` - Frontend setup guide
- `SETUP_GUIDE.md` - This complete setup guide

---

## ✨ PROJECT FEATURES

✅ **Authentication**
- JWT-based authentication
- Secure password hashing with bcryptjs
- Protected routes

✅ **Frontend**
- React 18 with Vite
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion animations
- Toast notifications

✅ **Backend**
- Express.js API
- MongoDB database
- Input validation
- Error handling middleware
- CORS support

✅ **Database**
- MongoDB with Mongoose ODM
- Sample data seeding
- Multiple collections (User, Department, Course, etc.)

---

## 🆘 GETTING HELP

1. **Check logs:**
   - Browser console (DevTools - F12)
   - Terminal output

2. **Read documentation:**
   - `README.md` at root
   - `backend/README.md`
   - `frontend/README.md`

3. **GitHub Issues:**
   - Report bugs with detailed context
   - Include terminal output and browser console errors

4. **Stack Overflow:**
   - Search for similar issues
   - Tag: `react`, `express`, `mongodb`, `vite`

---

## 🎉 YOU'RE ALL SET!

Your Campus Connect project is now:
✅ Properly organized with frontend/backend separation
✅ Ready to run locally
✅ Ready for GitHub upload
✅ Ready for production deployment

**Start developing! Happy coding! 🚀**

---

**Created**: April 2026
**Project**: Campus Connect - College Management System
**Version**: 1.0.0
