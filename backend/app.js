import express from "express";

const app = express();

app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        massage: "This is home page"
    })
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
})