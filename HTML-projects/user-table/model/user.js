const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
        name: {
        type: String,
        required: [true, "user name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        lowercase: true,
        trim: true,
    },

    age: {
        type: Number,
        min: [0, "age cannot be negative"]
    }


}, {timestamps: true}

);

const User = mongoose.model('user',userSchema);

module.exports = User;