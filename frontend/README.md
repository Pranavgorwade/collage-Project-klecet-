# Frontend Setup Guide

## Overview
This is a React 18 + Vite application for the Campus Connect college management system. It provides a modern, responsive UI with real-time updates and smooth animations.

## Technology Stack
- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## Prerequisites
- Node.js v14+ and npm installed
- Backend running on `http://localhost:5000`

## Installation

```bash
npm install
```

## Environment Variables

Create `.env.local` (copy from `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
VITE_DEBUG=false
```

## Available Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProtectedRoute.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Courses.jsx
│   ├── Faculty.jsx
│   ├── Departments.jsx
│   ├── Contact.jsx
│   ├── NewsEvents.jsx
│   ├── Placements.jsx
│   ├── StudentDashboard.jsx
│   └── AdminDashboard.jsx
├── context/         # React Context
│   └── AuthContext.jsx
├── services/        # API service modules
│   ├── authService.js
│   ├── courseService.js
│   ├── departmentService.js
│   ├── eventService.js
│   ├── facultyService.js
│   └── contactService.js
├── utils/          # Utility functions
│   └── axios.js    # Axios configuration
├── App.jsx
├── main.jsx
└── index.css
```

## Key Features

- **Authentication**: Login/Signup with JWT tokens
- **Routing**: Protected routes for authenticated users
- **API Integration**: Axios with token interceptors
- **Responsive Design**: Mobile-first approach with Tailwind
- **Notifications**: Toast notifications for user feedback
- **Animations**: Smooth animations with Framer Motion

## Troubleshooting

- **Port 5173 already in use**: `npm run dev -- --port 5174`
- **Module not found**: Delete `node_modules` and `.vite` folder, run `npm install`
- **Backend connection failed**: Ensure backend is running on port 5000
- **CORS errors**: Check `VITE_API_URL` in `.env.local`

## Deployment

Build the project and deploy the `dist/` folder to your hosting service:

```bash
npm run build
# Upload 'dist' folder to GitHub Pages, Vercel, Netlify, etc.
```
