# Backend API Setup Guide

## Overview
This is an Express.js + MongoDB API server for the Campus Connect college management system. It provides REST endpoints for authentication, departments, courses, faculty, events, and contact management.

## Technology Stack
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling)
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **Multer** - File upload handling
- **Cloudinary** - Cloud file storage

## Prerequisites
- Node.js v14+ and npm installed
- MongoDB running locally or MongoDB Atlas account
- (Optional) Cloudinary account for file uploads

## Installation

```bash
npm install
```

## Environment Variables

Create `.env` file (copy from `.env.example`):

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/college-db
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

## Available Commands

```bash
# Start production server
npm start

# Start development server (with auto-reload)
npm run dev

# Seed database with sample data
npm run seed

# Run tests
npm test
```

## Database Setup

### Option 1: Local MongoDB

```bash
# Install MongoDB
# Windows: Use installer or chocolatey
choco install mongodb-community

# Start MongoDB service
net start MongoDB

# Verify connection
mongosh
```

### Option 2: MongoDB Atlas (Cloud)

1. Create account at [mongodb.com/cloud](https://mongodb.com/cloud)
2. Create a new cluster
3. Get connection string: `mongodb+srv://user:password@cluster.mongodb.net/database`
4. Update `MONGODB_URI` in `.env`

## API Documentation

### Base URL
`http://localhost:5000/api`

### Authentication Endpoints (`/api/auth`)

**Register**
```
POST /register
Body: { email, password, name, rePassword }
Response: { token, user }
```

**Login**
```
POST /login
Body: { email, password }
Response: { token, user }
```

**Get Current User**
```
GET /me
Headers: { Authorization: Bearer <token> }
Response: { user }
```

### Departments (`/api/departments`)

```
GET /              # Get all departments
GET /:id           # Get single department
POST /             # Create department (Admin)
PUT /:id           # Update department (Admin)
DELETE /:id        # Delete department (Admin)
```

### Courses (`/api/courses`)

```
GET /              # Get all courses
GET /department/:deptId  # Get courses by department
POST /             # Create course (Admin)
PUT /:id           # Update course (Admin)
DELETE /:id        # Delete course (Admin)
```

### Faculty (`/api/faculty`)

```
GET /              # Get all faculty
GET /department/:deptId  # Get faculty by department
POST /             # Add faculty member (Admin)
PUT /:id           # Update faculty (Admin)
DELETE /:id        # Delete faculty (Admin)
```

### Events (`/api/events`)

```
GET /              # Get all upcoming events
POST /             # Create event (Admin)
PUT /:id           # Update event (Admin)
DELETE /:id        # Delete event (Admin)
```

### Contact (`/api/contact`)

```
POST /             # Submit contact form
```

## Project Structure

```
.
├── models/           # MongoDB schemas
│   ├── User.js
│   ├── Department.js
│   ├── Course.js
│   ├── Faculty.js
│   ├── Event.js
│   └── Contact.js
├── routes/           # API routes
│   ├── auth.js
│   ├── departments.js
│   ├── courses.js
│   ├── faculty.js
│   ├── events.js
│   └── contact.js
├── middleware/       # Custom middleware
│   └── auth.js       # JWT verification
├── server.js         # Express app entry point
├── seed.js          # Database seeder
├── package.json
└── .env.example
```

## Starting the Server

```bash
# Development mode (auto-reload)
npm run dev

# Output should show:
# MongoDB connected
# Server is running on http://localhost:5000
```

## Testing the API

Use Postman, REST Client extension, or curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"student@college.edu","password":"pass123","name":"John Doe"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@college.edu","password":"pass123"}'
```

## Seeding Database

Create sample departments, courses, faculty, events, and admin user:

```bash
npm run seed
```

**Sample Admin Credentials:**
- Email: `admin@klecet.edu.in`
- Password: `admin123`

## Troubleshooting

**MongoDB Connection Failed**
- Ensure MongoDB is running: `net start MongoDB` (Windows)
- Check `MONGODB_URI` in `.env`
- Verify network connectivity for MongoDB Atlas

**Port 5000 Already in Use**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti :5000 | xargs kill -9
```

**Module Dependencies Missing**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS Errors**
- Check `CORS_ORIGIN` in `.env` includes frontend URL
- Ensure frontend is making requests to correct API URL

## Security Notes

- Always use environment variables for sensitive data
- Never commit `.env` file to Git
- Change `JWT_SECRET` in production
- Use HTTPS in production
- Validate and sanitize all user inputs
- Keep dependencies updated: `npm audit`

## Deployment

```bash
# Build for production
npm install --production

# Set environment to production
set NODE_ENV=production

# Start server
npm start
```

Deploy to platforms like Heroku, AWS, DigitalOcean, or Azure.
