import express from "express";
import dotenv from "dotenv";
import errors from "./middlewares/errors.js";
import ErrorHandler from "./utils/ErrorHandler.js";

const app = express();

// config
dotenv.config({ path: "./.env" });

app.use("/", (req, res, next) => {
    const user = undefined;
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        massage: "This is home page"
    })
})

// for errorhandling
app.use(errors);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
})
