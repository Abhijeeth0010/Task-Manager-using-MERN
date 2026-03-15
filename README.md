# 📝 MERN Task Manager

A beautifully simple, full-stack Task Management application built to master the fundamentals of the MERN stack. 

This project was built from scratch as a learning journey into full-stack development, created collaboratively by **Abhijeeth** and **Antigravity** (an AI coding assistant from Google DeepMind).

---

## ✨ Features
- **Create:** Add new tasks with a title and description.
- **Read:** View a dynamic list of all tasks, ordered by creation date.
- **Update:** Seamlessly toggle task status between "Complete" and "Incomplete".
- **Delete:** Remove tasks when they are no longer needed.
- **Responsive UI:** Clean, modern, and accessible user interface.

## 💻 Technologies Used

### Frontend
- **React 18:** For building the interactive user interface.
- **Vite:** For an insanely fast, modern development environment.
- **Axios:** For making promise-based HTTP requests to the backend.
- **Vanilla CSS:** For custom, lightweight styling with modern CSS variables.

### Backend
- **Node.js:** JavaScript runtime for executing the server code.
- **Express.js:** Minimalist web framework for building the RESTful API.
- **MongoDB:** NoSQL database for flexible data storage.
- **Mongoose:** Elegant object modeling wrapper for MongoDB.
- **Cors & Dotenv:** For cross-origin resource sharing and environment variable management.

---

## 🚀 Getting Started

To run this project locally, you will need to have **Node.js** and **MongoDB** installed on your machine.

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/mern-task-app.git
cd mern-task-app
\`\`\`

### 2. Backend Setup
Open a terminal and navigate to the backend folder:
\`\`\`bash
cd backend
npm install
\`\`\`
Create a `.env` file in the `backend` directory and add your MongoDB connection string:
\`\`\`env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskapp
\`\`\`
Start the backend server:
\`\`\`bash
npm start
\`\`\`

### 3. Frontend Setup
Open a second terminal and navigate to the frontend folder:
\`\`\`bash
cd frontend
npm install
\`\`\`
Start the React development server:
\`\`\`bash
npm run dev
\`\`\`

The app should now be running! Open your browser to **http://localhost:5173** to start managing your tasks.

---

## 🤖 About the Process
This project was developed incrementally:
1. Setting up the Express server and connecting to a local MongoDB instance.
2. Building the Mongoose data models and testing CRUD API endpoints.
3. Scaffolding the React frontend using Vite.
4. Tying it all together using Axios state management to interact with the database.
