📚 Book Store Website

A full-stack MERN project where users can browse books, view details, log in, sign up, and manage their sessions. Built with React JS (Vite) for frontend and Node.js + Express + MongoDB for backend.

🌟 Features
Frontend

📖 Browse books with clean UI

🔍 Search & filter books

🖼 Attractive hero banner & responsive design

🔐 Login / Signup

👤 User authentication

✨ Beautiful cards & components

⚡ Built with Vite for fast development

Backend

🚀 Node.js + Express REST API

🗂 Book routes (GET all books)

👤 User routes (login, signup, logout)

🔒 JWT Authentication

📦 Mongoose models (Users & Books)

🌐 CORS enabled

🛠 Tech Stack
Frontend

React JS

Tailwind CSS

React Router

Axios

Vite

Backend

Node.js

Express

MongoDB & Mongoose

JWT Authentication

dotenv

📂 Folder Structure
BookStore/
│
│── Frontend/
│     ├── src/
│     ├── components/
│     ├── pages/
│     ├── context/
│     ├── public/
│     ├── package.json
│
│── Backend/
│     ├── controller/
│     ├── model/
│     ├── route/
│     ├── index.js
│     ├── .env
│     ├── package.json
│
│── .gitignore
│── README.md

🚀 How to Run the Project Locally
1️⃣ Clone the repository
git clone https://github.com/suhani1903/Book-Store-Website.git

2️⃣ Install Frontend dependencies
cd Frontend
npm install
npm run dev

3️⃣ Install Backend dependencies
cd Backend
npm install
npm start

🔑 Environment Variables (Backend/.env)

Create a .env file:

MONGO_URI=your_mongodb_cluster_url
JWT_SECRET=your_secret_key
PORT=5000

📬 API Endpoints
User Routes
Method	Endpoint	Description
POST	/signup	Register a new user
POST	/login	Login user
GET	/logout	Logout user
Book Routes
Method	Endpoint	Description
GET	/books	Get all books
🖼 Screenshots (Optional – Add Your Images)


🧑‍💻 Author

Suhani Patle
B.Tech CSE Student | Full-Stack Developer
📧 Email: suhanipatle1903@gmail.com

📱 Phone: 7299080855
🌐 GitHub: https://github.com/suhani1903

⭐ Show Your Support

If you like this project, please ⭐ the repository!
