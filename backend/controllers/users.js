import path from "path";
import fs from "fs";

import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const dbUser = await User.findOne({ email });

    if (dbUser) {
        // delete uploaded file if user already exists
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "Error deleting file" });
            }
        });
        return next(new ErrorHandler("User already exists", 400));
    }

    const avatar = req.file.filename;
    const fileUrl = path.join(avatar);
    const newUser = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl
    }

    const user = await User.create(newUser);
    res.status(201).json({
        success: true,
        user
    });
}


export const getUser = (req, res, next) => {
    const user = undefined;
    if (!user) {
        return next(new ErrorHandler("No user found", 404));
    }
    res.status(200).json({
        success: true,
        message: user
    });
}

