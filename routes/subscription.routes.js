import { Router } from 'express';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const subscriptionRouter = Router();

// GET /subscriptions -> get all subscriptions
// GET /subscriptions/:id -> get subscription by id
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET All Subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription Details' }));

// POST /subscriptions -> create a new subscription
// PUT /subscriptions/:id -> update subscription by id

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'Update Subscription Details' }));

// DELETE /subscriptions/:id -> delete subscription by id
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'Delete Subscription' }));


subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL User Subscription' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET Upcoming Renewals' }));


export default subscriptionRouter;