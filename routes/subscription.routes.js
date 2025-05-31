import { Router } from 'express';

const subscriptionRouter = Router();

// GET /subscriptions -> get all subscriptions
// GET /subscriptions/:id -> get subscription by id
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET All Subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription Details' }));

// POST /subscriptions -> create a new subscription
// PUT /subscriptions/:id -> update subscription by id

subscriptionRouter.post('/', (req, res) => res.send({ title: 'Create New Subscription' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'Update Subscription Details' }));

// DELETE /subscriptions/:id -> delete subscription by id
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'Delete Subscription' }));


subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET All User Subscriptions' }));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL User Subscription' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET Upcoming Renewals' }));


export default subscriptionRouter;