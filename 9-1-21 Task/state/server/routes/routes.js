import express from 'express'
import { createPost ,valuePost,mainPost} from '../controller/post-controller.js';
 const route=express.Router()

const router=express.Router();
router.get('/all',createPost)
router.post('/createuser',valuePost)
router.get('/',mainPost)

export default router