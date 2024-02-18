const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/temp')
    },
    filename:function(req,filename,cb){
        cb(null,filename.originalname);
    }

})
const upload = multer({storage});
module.exports = upload