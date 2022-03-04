const User = require('./models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { v1: uuidv1 } = require('uuid');

require('dotenv').config();

const signup = (req, res) => {
    console.log(req.body);

    const user = new User(req.body);

    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: '' + err
            });
        }

        user.salt = undefined;
        user.hashed_password = undefined;

        const token = jwt.sign({ _id: user._id, process.env.JWT_SECRET });

        res.cookie('t', token, { expiry: new Date() + 999 });

        const { _id, username } = user;
        return res.json({ token, user: { _id, username } });
    });
};

exports.signin = (req, res) => {
    //find user based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist'
            });
        }

        //if user is found make sure email and password match
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password don't match"
            });
        }

        //generate signin token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        //persist token as 't' in cookie with expiry date
        res.cookie('t', token, { expiry: new Date() + 150 });

        //return response with user and token to frontend client
        const { _id, name, email, role, profile_picture } = user;
        return res.json({ token, user: { _id, email, name, role, profile_picture } });
    });
};
