import express from 'express';

import upload from "../utils/multer.js";
import { getUser, registerUser } from '../controllers/users.js';

const router = express.Router();

// register new user
router.post('/register', upload.single('image'), registerUser);

router.get('/getUser', getUser);

export default router;