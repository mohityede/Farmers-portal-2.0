import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * (1e9 + 7));
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".jpg");
    }
});

const upload = multer({ storage });

export default upload;