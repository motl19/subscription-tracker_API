// Defines an authentication router for handling user authentication-related routes

import { Router } from 'express';

import { signIn, signOut, signUp } from '../controllers/auth.controller';


const authRouter = Router();

// Path: /api/v1/auth/
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;