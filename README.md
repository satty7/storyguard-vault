# 🛡️ StoryGuard — Full Stack Application

**StoryGuard** is a full-stack web application designed to help patients securely store, manage, and share their medical data — using a powerful combination of **React**, **Node.js**, **MongoDB**, and **Blockchain smart contracts**.

> 📌 Patient-first. Privacy-focused. Blockchain-backed.

---

## 📸 Demo

[Include screenshots or screen recordings here showing login, dashboard, and data flow]

---

## 🔗 Project Structure

storyguard-main/
├── backend/ # Node.js + Express + MongoDB + Smart Contracts
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── smart-contracts/ (Hardhat)
│ └── server.js
│
├── frontend/ # React app for patient UI
│ ├── public/
│ ├── src/
│ │ ├── pages/
│ │ └── App.js, index.js etc.
│ └── package.json
│
├── .gitignore
└── README.md (you're here!)

pgsql
Copy
Edit

---

## 👨‍⚕️ For Patients (Client Usage)

1. Visit the website (or locally at `http://localhost:3000`)
2. Register as a new user
3. Log in using your email/password
4. Access your secure dashboard with personal medical records
5. Your data is end-to-end encrypted and written on-chain for authenticity

---

## 🚀 How to Run the Project (Locally)

### ✅ 1. Clone the Repo
bash
git clone https://github.com/satty7/storyguard-main.git
cd storyguard-main

### 🧩 2. Backend Setup
bash
cd backend
npm install

🔐 Create a .env file in backend/:
env
PORT=5000
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here 

▶ Start Backend
bash
npm start
Runs on: http://localhost:5000

### 💻 3. Frontend Setup
bash
cd ../frontend
npm install


🛠️ Create a .env in frontend/:
env
REACT_APP_API_URL=http://localhost:5000

▶ Start Frontend
npm start
Runs on: http://localhost:3000

### 🔐 Tech Stack
| Layer      | Tech Used                         |
| ---------- | --------------------------------- |
| Frontend   | React, CSS                        |
| Backend    | Node.js, Express, MongoDB         |
| Blockchain | Solidity, Hardhat, Ethers.js      |
| Auth       | JWT, bcrypt                       |
| Hosting    | GitHub (dev), Vercel (prod-ready) |

### 📡 API Endpoints (Backend)
| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/api/register`  | Register new users  |
| POST   | `/api/login`     | Login users         |
| GET    | `/api/dashboard` | Protected dashboard |
More coming soon…

🧾 .gitignore Best Practices
Ignored files:
    -> node_modules/
    -> .env
    -> build/


🧪 Testing
Use Postman to test API routes
Use console.log() & browser dev tools to trace frontend behavior
Run smart contract test scripts via Hardhat if needed

🧠 Future Enhancements
Role-based access for doctors, admins
File uploads for reports (IPFS or similar)
Multi-chain smart contract support
Email/SMS notifications

🧾 License
MIT — use it, break it, build on it. Just credit it. ✨

✨ Created With
Built with 💜 by @satty7

Want to collaborate, report an issue, or contribute? Open an issue
