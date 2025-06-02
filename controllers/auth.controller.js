import mongoose from 'mongoose';

export const signUp = async (req, res, next) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // logic to create a new user
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return next(error);
    }
}

export const signIn = async (req, res, next) => { }

export const signOut = async (req, res, next) => { }

