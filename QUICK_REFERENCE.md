# Campus Connect - Quick Reference Card

## 🚀 START YOUR APPLICATION IN 30 SECONDS

### Step 1: Open First Terminal (Backend)
```bash
cd backend
npm start
```
✅ Wait for: **"Server is running on http://localhost:5000"**

### Step 2: Open Second Terminal (Frontend)
```bash
cd frontend
npm run dev
```
✅ Wait for: **"Local: http://localhost:5173/"**

### Step 3: Open Browser
Visit: **http://localhost:5173**

**✅ DONE! Your application is running!**

---

## 📌 IMPORTANT URLS

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | Main application |
| Backend API | http://localhost:5000/api | REST API |
| Health Check | http://localhost:5000/api/health | Verify backend |

---

## 👤 DEFAULT CREDENTIALS

### Admin User (after seeding)
- **Email**: `admin@klecet.edu.in`
- **Password**: `admin123`

Or create your own user via signup page.

---

## ⚡ Most Used Commands

```bash
# Backend
npm start              # Run production server
npm run dev            # Run with auto-reload
npm run seed           # Add sample data to database

# Frontend
npm run dev            # Start dev server
npm run build          # Create production build
npm run lint           # Check code quality
```

---

## 🔧 TROUBLESHOOTING

### Backend won't start?
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000
# Kill the process
taskkill /PID <PID> /F
```

### MongoDB error?
```bash
# Start MongoDB
net start MongoDB
# Or ensure MongoDB Atlas is configured in .env
```

### Frontend won't start?
```bash
# Clear Vite cache
rm -rf .vite
npm run dev
```

### "Cannot find module" error?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 FILE LOCATIONS

| Config/File | Location |
|------------|----------|
| Backend env | `backend/.env` |
| Frontend env | `frontend/.env.local` |
| MongoDB URI | `backend/.env` |
| API URL | `frontend/.env.local` |

---

## 🚢 BEFORE COMMITTING TO GIT

```bash
# Never commit these files
rm backend/.env        # Keep only .env.example
rm frontend/.env.local # Keep only .env.example

# Check what you're committing
git status

# Then commit
git add .
git commit -m "Project setup"
```

---

## 📚 HELPFUL LINKS

- **Setup Guide**: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Backend Docs**: [backend/README.md](backend/README.md)
- **Frontend Docs**: [frontend/README.md](frontend/README.md)
- **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🎯 USAGE FLOW

1. **First Visit**
   - Go to http://localhost:5173
   - Click "Sign Up"
   - Create your account
   - Login with credentials

2. **Admin Setup**
   - Run: `npm run seed` (in backend folder)
   - Login with: `admin@klecet.edu.in` / `admin123`
   - Access admin dashboard at `/admin`

3. **Explore Features**
   - Browse departments
   - View courses and faculty
   - Check events and news
   - Contact college via form

---

## 🔌 TEST API ENDPOINTS

```bash
# Check backend is running
curl http://localhost:5000/api/health

# Get all departments
curl http://localhost:5000/api/departments

# Register user (POST)
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@college.edu","password":"Test@123","name":"John Doe"}'
```

---

## 📊 PROJECT STRUCTURE AT A GLANCE

```
📦 campus-connect
 ├── 📁 frontend        (React App - Port 5173)
 │   ├── src/
 │   ├── package.json
 │   └── .env.local
 │
 ├── 📁 backend         (Express API - Port 5000)
 │   ├── models/        (Database schemas)
 │   ├── routes/        (API endpoints)
 │   ├── server.js
 │   ├── package.json
 │   └── .env
 │
 ├── .gitignore
 ├── README.md
 ├── SETUP_GUIDE.md
 └── PROJECT_SUMMARY.md
```

---

## ✅ VERIFICATION CHECKLIST

- [ ] Both npm installs completed without errors
- [ ] Backend running on http://localhost:5000
- [ ] Frontend running on http://localhost:5173
- [ ] Can access both URLs in browser
- [ ] MongoDB is connected
- [ ] Can create new user account
- [ ] Can login successfully

---

## 🆘 QUICK HELP

| Issue | Quick Fix |
|-------|-----------|
| "npm: command not found" | Install Node.js from nodejs.org |
| "MongoDB connection failed" | Run `net start MongoDB` or use MongoDB Atlas |
| "Cannot connect to localhost:5000" | Check backend is running |
| "Cannot connect to localhost:5173" | Check frontend is running |
| "Module not found errors" | Run `npm install` in the folder |

---

## 💾 IMPORTANT: NEVER COMMIT

```
❌ Don't commit these:
  - backend/.env
  - frontend/.env.local
  - node_modules/
  - dist/
  - .vite/

✅ Always commit:
  - package.json
  - .env.example
  - .gitignore
  - source code
  - documentation
```

---

## 🎓 LEARNING PATH

1. Start the servers
2. Browse the frontend URLs
3. Check network requests (DevTools → Network)
4. Read the backend/README.md
5. Explore the database via MongoDB Compass
6. Modify a component and see hot reload
7. Add a new API endpoint
8. Deploy to GitHub

---

## 🎉 YOU'RE READY!

Your project is:
- ✅ Organized
- ✅ Running
- ✅ Documented
- ✅ Ready to Develop
- ✅ Ready to Deploy

**Start coding! 🚀**

---

**Quick Question?** Check the relevant README file in the project root or each folder.

**Questions about API?** See `backend/README.md`

**Questions about Frontend?** See `frontend/README.md`

**Full Setup Help?** See `SETUP_GUIDE.md`
