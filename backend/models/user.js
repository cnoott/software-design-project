const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
        unique: true,
    },

    fullName: {
        type: String,
        trim: true,
        maxlength: 50,
        unique: true,
    },

    address1: {
        type: String,
        maxlength: 100,
    },

    address2: {
        type: String,
        maxlength: 100,
    },

    zipcode: {
        type: String,
        maxlength: 9,
    },

    hashed_password: {
        type: String,
    },

    salt: String,

},
    {timestamps: true}
);


//virtual field
userSchema.virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if(!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }
        catch(err){
            return '';
        }
    }
};


module.exports = mongoose.model('User', userSchema);

