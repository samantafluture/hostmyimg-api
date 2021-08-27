# HostMyImg API

A minimal RESTful API for hosting imagens (.png, .jpg, .gif) online. 

**Usage**

Fetch: [HostMyImg API](https://hostmyimg-api.herokuapp.com/)

**Documentation**

[HostMyImg API Documentation](https://hostmyimg-api.herokuapp.com/api-docs) built with `swagger-ui-express`.

## Features

- Add one or multiple files
- Formats: png, jpg and gif
- Maximum size: 2M per file
- Retrieve a URL from each file
- Able to remove it from the upload queue
- Hashed password
- Username and email validation 
- Authentication with JTW token
- Retrieve posts per user
- Retrieve user by post 

## Built with

- Node.js
- Express
- MongoDB, Mongoose
- JWT Token
- AWS, S3
- Heroku

## Endpoints

### No Authorization Required

'GET'
- `/posts/free`: get all posts
- `/users/free`: get all users

'POST'
- `/posts/free`: upload file or multiple files (formats: png, jpeg, gif)

'DELETE'
- `/posts/_id`: delete a post by id (params, in path)

### Auth Routes

'POST'
- `/signup`: create new user (required: username, email and password)
- `/login`: login user and retrieve token (required: username and password)

## Under Construction

This API is still under development :coffee:
Please feel free to contribute! 