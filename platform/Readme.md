# Platform

## Description
Platform is a Node.js-based application that utilizes Express for backend services, Mongoose for MongoDB interactions, and Socket.io for real-time communication. It includes authentication mechanisms using JSON Web Tokens (JWT) and data validation using Express Validator.

## Features
- User authentication with JWT
- Real-time communication with Socket.io
- MongoDB integration using Mongoose
- File uploads using Multer
- Secure password hashing with bcryptjs
- API request validation with Express Validator
- Unit testing with Mocha and Chai

## Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd platform
npm install
```

## Usage

### Start the server
```sh
npm start
```

### Run tests
```sh
npm test
```

## Dependencies

- **Express**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **Socket.io**: Real-time communication
- **bcryptjs**: Password hashing
- **jsonwebtoken**: Authentication with JWT
- **body-parser**: Middleware for handling JSON requests
- **multer**: Middleware for handling file uploads
- **express-validator**: Middleware for request validation
- **node-fetch**: Fetch API for server-side requests

## Development Dependencies

- **Nodemon**: Auto-restart server on file changes
- **Mocha**: JavaScript test framework
- **Chai**: Assertion library for testing

## License

This project is licensed under the ISC License.

## Author

Developed by Jonny Zong.

