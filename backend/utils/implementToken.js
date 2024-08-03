import jwt from 'jsonwebtoken';

const implementToken = (res, userId) => {

    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );

    if (typeof res.cookie === 'function') {
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
    } else {
        console.error('res.cookie is not a function');
    }

    return token;
};

export default implementToken;
