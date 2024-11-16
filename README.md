
# Full Stack Contact Management Application

This project is a Full Stack Application that consists of:  
1. **Backend**: A Node.js and Express server with MongoDB for managing contacts.  
2. **Frontend**: A React application that interacts with the backend to perform CRUD (Create, Read, Update, Delete) operations on contacts.  

## Features

### Backend
- RESTful API to manage contact data.
- Integration with MongoDB using Mongoose for schema and database management.
- Validation of contact fields such as email, phone number, and required fields.
- Endpoints for performing CRUD operations:
  - `GET /contacts`: Retrieve all contacts.
  - `POST /contacts`: Add a new contact.
  - `PUT /contacts/:id`: Update an existing contact by ID.
  - `DELETE /contacts/:id`: Delete a contact by ID.

### Frontend
- Dynamic React interface for managing contacts.
- Form for adding new contacts with validation.
- Editable contact details with real-time updates.
- User-friendly interface styled with Material UI.
- Integration with the backend API using Axios.
- Provided Feature to sort the elements based on any of the Data Fields

## Project Structure

```
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
```

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB installed and running locally or accessible via a cloud provider.

### Backend (Express + MongoDB)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   - The server will run on `http://localhost:5000` by default.
   - Ensure MongoDB is running and accessible.

### Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   - The frontend application will run on `http://localhost:3000`.

## Database Schema

The backend stores contact information in a MongoDB database. Below is the schema for the contacts:

```javascript
const mongoose = require("mongoose");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneNoRegex = /^[0-9]{10}$/;

const schema = new mongoose.Schema({
  FirstName: {
    required: [true, "First name is required"],
    type: String,
    minlength: [2, "First name should be at least 2 characters long"],
  },
  LastName: {
    required: [true, "Last name is required"],
    type: String,
    minlength: [2, "Last name should be at least 2 characters long"],
  },
  Email: {
    required: [true, "Email is required"],
    type: String,
    unique: true,
    match: [emailRegex, "Please provide a valid email address"],
  },
  PhoneNo: {
    required: [true, "Phone number is required"],
    type: String,
    match: [phoneNoRegex, "Phone number must be 10 digits long"],
  },
  Company: {
    required: [true, "Company name is required"],
    type: String,
    minlength: [3, "Company Name should be at least 3 characters long"],
  },
  JobTitle: {
    required: [true, "Job title is required"],
    type: String,
  },
});

const Contacts = mongoose.model("contacts", schema);
module.exports = Contacts;
```

## Technical Decisions

### Backend
- Built using Node.js and Express.js for lightweight and scalable server management.
- Mongoose for structured schema and database interactions.
- CORS enabled for cross-origin requests during development.
- Nodemon for automatic server restarts during development.

### Frontend
- React for a dynamic and responsive user interface.
- Material UI for modern, prebuilt design components.
- Axios for handling HTTP requests between frontend and backend.
- Sorting to order the elements based on any of the Data Fields

### Database
- MongoDB for flexible, scalable data storage.

---

This application provides a complete full-stack solution for managing contacts with features such as adding, editing, deleting, and displaying contact data.
