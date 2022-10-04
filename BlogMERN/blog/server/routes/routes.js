import express from 'express'
import { createPost,getAllPost,getPost,updatePost,deleteBlog} from '../controller/post-controller.js';
import { uploadFile} from '../controller/image-controller.js';
import upload from '../utils/upload.js'
import{getImage} from '../controller/image-controller.js'

const router=express.Router();

router.post('/create',createPost)

router.get('/posts',getAllPost)
router.get('/post/:id',getPost)
router.post('/update/:id',updatePost)
router.delete('/delete/:id',deleteBlog)

router.post('/file/upload',upload.single('file'),uploadFile)
router.get('/file/:filename',getImage)

export default router;

