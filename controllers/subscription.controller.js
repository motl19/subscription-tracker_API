import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({ success: true, data: subscription });

    } catch (e) {
        next(e);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        // Disallow access if the user is trying to access another user's subscriptions
        if (req.user.id !== req.params.id) {
            const error = new Error('You cannot access other users subscriptions');
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });

        res.status(200).json({ success: true, data: subscriptions });
    } catch (e) {
        next(e);
    }
}

//delete subscription by id
export const deleteSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!subscription) {
            const error = new Error('Subscription not found');
            error.status = 404;
            throw error;
        }

        res.status(204).json({ success: true });
    } catch (e) {
        next(e);
    }
}