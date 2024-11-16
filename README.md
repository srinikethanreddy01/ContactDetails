Full Stack Application - Backend & Frontend
This project consists of two parts:

1.Backend: An Express server with MongoDB integration for managing contacts.
2.Frontend: A React application that interacts with the backend to perform CRUD operations on contacts.

1.Project Structure
  /project-root
    /backend
      /models
        Contact.js
      /controllers
        contactController.js
      /routes
        contactRoutes.js
      index.js
      package.json
    /frontend
      /src
        /components
          ContactList.js
          AddContact.js
        /services
          api.js
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
  
  2.Frontend (React)
    1.Setup
      1.Install dependencies:
  
        Navigate to the frontend directory and run:
  
        cd frontend
        npm install
      2.Run the frontend:
    
        To start the React development server:
    
        npm start
    This will start the frontend application on port 3000 by default.



2.DataBase Schema:
  The backend stores contact information in a MongoDB database. Here’s the schema used for the contacts:

  2.1 Contact Schema (backend/models/Contact.js)
    const mongoose = require("mongoose");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneNoRegex = /^[0-9]{10}$/;
    
    const schema = new mongoose.Schema({
      'FirstName':{
        required:[true, 'First name is required'],
        type:String,
        minlength: [2,'First name should be at least 2 characters long'],
      },
      'LastName':{
        required: [true,'Last name is required'],
        type: String,
        minlength: [2,'Last name should be at least 2 characters long'],
      },
      'Email':{
        required:[true,'Email is required'],
        type:String,
        unique:true,
        match:[emailRegex,'Please provide a valid email address'],
      },
      'PhoneNo':{
        required:[true,'Phone number is required'],
        type:String,
        match:[phoneNoRegex,'Phone number must be 10 digits long'],
      },
      'Company':{
        required:[true,'Company name is required'],
        type:String,
        minlength:[3,'Company Name should be at least 3 characters long'],
      },
      'JobTitle':{
        required:[true,'Job title is required'],
        type: String,
      },
    });
    
    
    const Contacts = mongoose.model('contacts', schema);
    module.exports = Contacts;


3.Technical Decisions:
    Technical Decisions
      Backend:
      
        ->The backend is built using Node.js and Express.js, making it lightweight and easy to scale.
        ->Mongoose is used to interact with MongoDB, providing a structured way to define the schema and perform queries.
        ->CORS is enabled in the backend to allow cross-origin requests from the frontend during development.
        ->Nodemon is used to automatically restart the backend server during development.
      Frontend:
      
        ->React is chosen to create a dynamic and responsive user interface.
        ->Material UI is used for styling the frontend, providing a modern design system with prebuilt components.
        ->Axios is used to handle HTTP requests between the frontend and the backend.
      Database:
      
        ->MongoDB is used as the database due to its flexibility in handling unstructured data, and its scalability is ideal for growing applications.

4.Overview of the App:
    Backend
      The backend provides an API to interact with the contact data:
      
        ->GET /contacts: Retrieves all contacts from the MongoDB database.
        ->POST /contacts: Creates a new contact in the database.
        ->PUT /contacts/:id : Updates an existing contact based on its ID.
        ->DELETE /contacts/:id : Deletes a contact from the database by ID.
    Frontend
      The frontend allows the user to perform the following actions:

        ->View contacts: The main page lists all contacts fetched from the backend.
        ->Add a contact: The user can submit a form to add a new contact, which is then sent to the backend to be saved in the database.
        ->Update a contact: The user can update an existing contact by clicking an edit button next to the contact, modifying its details, and submitting the form.
        ->Delete a contact: The user can delete a contact from the list by clicking the delete button next to it.


5.API EndPoints
  
  Here are the API endpoints in the backend:

    GET /contacts: Fetches all contacts.
    POST /contacts: Creates a new contact.
    PUT /contacts/:id: Updates an existing contact by ID.
    DELETE /contacts/:id/ : Deletes a contact by ID.
    Each request and response follows the standard REST API conventions, with appropriate status codes (e.g., 200 OK, 201 Created, 400 Bad Request, 500 Internal Server Error).


      
          


