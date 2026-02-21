# MERN Users App

Full-stack MERN application built with:

- MongoDB Atlas
- Express + Node.js (TypeScript)
- React (TypeScript)
- Tailwind CSS
- Vite

## 🚀 Overview

Simple users management application.

Features:
- Create users
- View users
- REST API with Express
- Cloud database via MongoDB Atlas

## 🧠 Tech Stack

### Backend
- Node.js
- Express
- Mongoose
- TypeScript
- MongoDB Atlas

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite

## 📦 Project Structure
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

---

# ⚙️ Backend Setup (Server)

## 1️⃣ Install dependencies

```bash
cd server
npm install

2️⃣ Configure environment variables

PORT=8000
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/mern-users?retryWrites=true&w=majority

Replace:
	•	<username> → your MongoDB Atlas username
	•	<password> → your MongoDB Atlas password
	•	<cluster> → your cluster hostname

3️⃣ Run development server

npm run dev

Server runs at: http://localhost:8000


⚙️ Frontend Setup (Client)

1️⃣ Install dependencies
cd client
npm install

Vite runs at: http://localhost:5173

🔐 Notes
	•	MongoDB Atlas is used as cloud database
	•	TypeScript is enabled for both backend and frontend
	•	CORS enabled for development
	•	Environment variables handled via dotenv
	•	Nodemon used for backend auto-restart





