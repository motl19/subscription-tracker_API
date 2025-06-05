import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {

    try {
        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied()) {
            // If the request is denied, send a 403 Forbidden response
            if (decision.reason.isRateLimit()) return res.status(429).send({ error: 'Rate Limit Exceeded!' });
            if (decision.reason.isBot()) return res.status(403).send({ error: 'Access Denied - Bot Detected!' });

            return res.status(403).send({ error: 'Access Denied!' });
        }

        next(); // If the request is allowed, proceed to the next middleware
    } catch (error) {
        console.error('Arcjet Middleware Error:', error);
        next(error); // Pass the error to the next middleware
    }
}

export default arcjetMiddleware;