import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'

const storage=new GridFsStorage({
    url:'mongodb+srv://BlogUser:Nazim164@blogweb.mjrgv.mongodb.net/BLOGMERN?retryWrites=true&w=majority',
    options:{useNewUrlParser:true,useUnifiedTopology:true},
    file:(request,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.mimeType)===-1)
        return `${Date.now()}-blog-${file.originalname}`

        return{
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage})