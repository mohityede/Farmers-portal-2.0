import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be at least 8 characters'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    phoneNumber: {
        type: Number
    },
    addresses: [
        {
            country: String,
            state: String,
            city: String,
            street: String,
            zipCode: Number,
            addressType: String
        }
    ],
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
});

// Create the user model
const User = mongoose.model('User', userSchema);

export default User;