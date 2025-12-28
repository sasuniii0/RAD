# Smart Blog Project 📝

This repository documents the development of a full-stack blogging application built with **React (frontend)** and **Node.js/Express/MongoDB (backend)**. It includes authentication, file handling, cloud storage, and modern React features such as hooks, context, and Redux.

---

## 📚 Project Structure

### 1. React Frontend (smart-blog-fe)
- Initial React app setup (`hello-react`, first commit)
- Created reusable components (`DetailCard`, `MyComponent`, `UserDetail`)
- Props handling and optional chaining
- Event handling and forms
- Integrated **Tailwind CSS** for styling
- Implemented hooks:
  - `useState` for state management
  - `useEffect` for lifecycle behavior
  - `useContext` for avoiding prop drilling
  - `useReducer` for complex state
  - `useCallback`, `useMemo`, and `useRef` for performance optimization
- Explored class components and functional component lifecycle
- Built Redux store:
  - Initialized project with Redux
  - Added slices and reducers
  - Integrated third-party Redux libraries
  - Practiced TypeScript types with React

### 2. Node.js Backend (smart-blog-be)
- Initialized Node.js + Express project
- Added routes and controllers following MVC architecture
- Connected MongoDB and created `.env` configurations
- Created user model and post entity
- Implemented validation and database operations (`findOne`, save user, promises)
- Linked posts with users (foreign key relationship)
- Added middleware handling and CORS support
- Integrated **bcrypt** and **JWT** for authentication
- Built login and registration flows (including role-based admin register)
- Implemented refresh token handling:
  - Backend logic for refresh-token from access-token
  - Frontend validation with refresh tokens
- Added Cloudinary configuration for image uploads
- Integrated **Multer middleware** for file handling

### 3. Authentication & Dashboard
- Implemented user authentication (frontend + backend)
- Created interceptors for requests
- Simple GET request for login and user details
- Built dashboard features with secure routes

### 4. Development Practices
- Organized middleware into separate folders
- Refactored index.ts with configurations
- Structured controllers and routes
- Practiced sending GET/POST requests with Express + TypeScript
- Explored routing and modularization

---

## 🔑 Key Features
- **Frontend:** React with hooks, context, Redux, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, MVC structure
- **Authentication:** JWT, bcrypt, refresh tokens, role-based admin
- **File Handling:** Multer middleware, Cloudinary integration
- **State Management:** Redux store, reducers, slices
- **Performance:** useCallback, useMemo, useRef optimizations

---

## 🎯 Goal
This project demonstrates building a **full-stack blog application** with modern web technologies. It covers everything from frontend component design to backend authentication and cloud-based file storage.

---

## 👤 Author
**Sasuni**  
Exploring full-stack development with React, Node.js, and MongoDB.
