import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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