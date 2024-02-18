const cloudinary = require('cloudinary').v2;


//cloudinary config
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


//uploading file using uploader.upload()
const uploadCloudinary = async(localfilepath)=>{
    try{
        const response = await cloudinary.uploader.upload(localfilepath , {
            resource_type:'auto'
        })
        return response;
    }catch(err){
        console.log(err)
        throw err;
    }
    
}

module.exports = uploadCloudinary