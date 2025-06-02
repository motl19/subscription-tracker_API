/* This code defines a user router for handling user-related routes in an Express application.
It includes routes for getting all users, getting a user by ID, creating a new user, updating a user by ID, and deleting a user by ID.
Each route sends a simple response with a title indicating the action performed.
The router is exported for use in the main application file. */

import { Router } from 'express';

import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

// GET /users -> get all users
// GET /users/:id -> get user by id

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

// POST /users -> create a new user
// PUT /users/:id -> update user by id

userRouter.post('/', (req, res) => res.send({ title: 'Create New User' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'Update User Details' }));

// DELETE /users/:id -> delete user by id
userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete User' }));

export default userRouter;
