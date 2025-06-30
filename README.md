# 🎓 EduLeave – Leave Management System (Backend)

A secure and scalable backend system for managing student leave applications in educational institutions. Built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**, this RESTful API supports authentication, role-based access control, and leave request workflows for students and admins.

---

## Features

- ✅ User Registration & Login (JWT-based)
- 👨‍🎓 Role-based Access (Student & Admin)
- 📝 Leave Application Management
- 📊 Admin Dashboard APIs for pending approvals
- 🔐 Secure: Password Hashing, Input Validation, Helmet
- ⚡ Fast: Lean Queries, Indexing

---

## 🛠 Tech Stack

| Tech          | Description                        |
|---------------|------------------------------------|
| Node.js       | JavaScript runtime                 |
| Express.js    | Web framework for Node.js          |
| MongoDB       | NoSQL database                     |
| Mongoose      | ODM for MongoDB                    |
| JWT           | JSON Web Tokens for Auth           |
| bcryptjs      | Password hashing                   |
| dotenv        | Environment variables              |
| express-validator | Input validation              |
| helmet        | HTTP headers security              |
| morgan        | HTTP request logger                |

---


---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/eduleave-backend.git
   cd eduleave-backend 
   ```
2. **install dependencies:**
   ``` bash
   npm install
   ```
3. **create .env file**
   ```bash
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. **run the server**
   ```bash
   node server.js
   ```

## Sample User Roles
Student: Can register, login, and apply/view their own leave.

Admin: Can view and update all leave requests.

---

## Postman Collection
A ready-to-import Postman collection with all test cases is available in the postman/ folder.

---

## How to use Postman Files 
Open Postman.

Click Import → Upload Files.

Select the .json file you just downloaded.

Replace <TOKEN> with your actual JWT token in protected requests.

---

## 🧾 License
This project is licensed under the MIT License.






