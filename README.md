# Learning Management System (LMS)

A full-stack MERN (MongoDB, Express.js, React, Node.js) based Learning Management System that enables educators to create and manage courses, and students to enroll and learn.

## 🚀 Features

### For Students
- User authentication (Signup/Login with email)
- Browse and search courses
- Enroll in courses
- View lectures and course content
- Rate and review courses
- AI-powered course search
- Track learning progress

### For Educators
- Create and manage courses
- Upload course content (videos, materials)
- Create and edit lectures
- Set course pricing
- Track enrolled students
- View course analytics

### Admin Features
- User management
- Course moderation
- Platform analytics

## 🛠 Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- React Router (Routing)
- TailwindCSS (Styling)
- Vite (Build Tool)
- React Icons
- React Simple Star Rating
- React Toastify (Notifications)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- Bcrypt (Password Hashing)
- Multer (File Uploads)
- Nodemailer (Email Service)
- Razorpay (Payments)
- Google GenAI (AI Features)


## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Razorpay account (for payments)
- Google Cloud account (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imabhijeetkarne/LMS.git
   cd LMS
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Environment Variables**

   Create a `.env` file in both `backend` and `frontend` directories with the following variables:

   **Backend (.env)**
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FRONTEND_URL=http://localhost:5173
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   GOOGLE_APPLICATION_CREDENTIALS=path_to_google_credentials.json
   ```

   **Frontend (.env)**
   ```
   VITE_SERVER_URL=http://localhost:8000
   ```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Courses
- `GET /api/course` - Get all courses
- `GET /api/course/:id` - Get single course
- `POST /api/course` - Create a course (Educator only)
- `PUT /api/course/:id` - Update course (Educator only)
- `DELETE /api/course/:id` - Delete course (Educator only)

### Payments
- `POST /api/payment/checkout` - Create Razorpay order
- `POST /api/payment/verification` - Verify payment

### AI Features
- `POST /api/ai/search` - AI-powered course search

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

