Full Stack Application - Backend & Frontend
This project consists of two parts:

1.Backend: An Express server with MongoDB integration for managing contacts.
2.Frontend: A React application that interacts with the backend to perform CRUD operations on contacts.

Project Structure
/project-root
  /backend
    /models
    /controllers
    /routes
    index.js
    package.json
  /frontend
    /src
    /public
    package.json
  README.md

1.Backend (Express + MongoDB)
Setup
  1.Install dependencies:

    Navigate to the backend directory and run:
      cd backend
      npm install

  2.Run the backend:

    To start the backend server with nodemon (which watches for changes):

      npm start
      The server will start on port 5000 by default. Make sure MongoDB is running and accessible.
