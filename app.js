// File sets up a basic Express server for the Subscription Tracker API.

import express from 'express';

import { PORT } from './config/env.js';

// Importing routes
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

// Importing database connection
import connectToDatabase from './database/mongodb.js';

// Importing necessary modules
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

import arcjetMiddleware from './middlewares/arcjet.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Importing Arcjet middleware
app.use(arcjetMiddleware);


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);


app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});

app.listen(PORT, async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;