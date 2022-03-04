const User = require('./models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { v1: uuidv1 } = require('uuid');

require('dotenv').config();

exports.signup = (req, res) => {
    console.log(req.body);

    const user = new User(req.body);

    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: ''+err
            });
        }

        user.salt = undefined;
        user.hashed_password = undefined;

        const token = jwt.sign({ _id: user._id, process.env.JWT_SECRET });

        res.cookie('t', token, {expiry: new Date() + 999});

        const { _id, username } = user;
        return res.json({token, user: {_id, username}});
    });
};


