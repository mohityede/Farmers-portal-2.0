import express from "express";
import dotenv from "dotenv";

import errors from "./middlewares/errors.js";
import connectDB from "./database/database.js"
import userRoutes from "./routes/usersRoutes.js"

const app = express();

// config
dotenv.config({ path: "./.env" });

// database connection
connectDB();

// middlewares
app.use(express.json());

app.use("/users", userRoutes);

// for errorhandling
app.use(errors);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
})
