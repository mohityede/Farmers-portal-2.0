import ErrorHandler from "../utils/ErrorHandler.js";

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

