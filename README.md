# MERN Users App 🚀

Full-stack MERN application built with:

- MongoDB Atlas
- Express + Node.js (TypeScript)
- React (TypeScript)
- Tailwind CSS (utility-first styling)
- Vite
- TanStack React Query

---

## 🚀 Overview

Simple user management application.

### Features

- Create users
- Update users
- Delete users
- View users
- REST API with Express
- Cloud database via MongoDB Atlas
- Server-state management with React Query
- Modern UI built with Tailwind CSS

---

## 🧠 Tech Stack

### Backend
- Node.js
- Express
- Mongoose
- TypeScript
- MongoDB Atlas
- Nodemon

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack React Query

---

## 📦 Project Structure

```
users-list-mern-stack/
│
├── server/          # Express + MongoDB API
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── client/          # React + Tailwind frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

# ⚙️ Backend Setup (Server)

## 1️⃣ Install dependencies

```bash
cd server
npm install
```

## 2️⃣ Configure environment variables

Create a `.env` file inside `server/`:

```env
PORT=8000
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/mern-users?retryWrites=true&w=majority
```

Replace:

- `<username>` → your MongoDB Atlas username  
- `<password>` → your MongoDB Atlas password  
- `<cluster>` → your cluster hostname  

## 3️⃣ Run development server

```bash
npm run dev
```

Server runs at:

```
http://localhost:8000
```

---

# ⚙️ Frontend Setup (Client)

## 1️⃣ Install dependencies

```bash
cd client
npm install
```

## 2️⃣ Run development server

```bash
npm run dev
```

Vite runs at:

```
http://localhost:5173
```

---

# 🔐 Notes

- MongoDB Atlas is used as cloud database
- TypeScript is enabled for both backend and frontend
- Tailwind CSS is used for styling
- TanStack React Query manages server state and caching
- CORS enabled for development
- Environment variables handled via dotenv
- Nodemon used for backend auto-restart

---

# 🏗 Status

Built as part of MERN stack practice and full-stack architecture training.
