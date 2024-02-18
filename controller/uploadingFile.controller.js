const User = require('../model/user.model');
const uploadCloudinary = require('../utils/cloudinary');

const uploadingFile = async (req,res) =>{
    
    try{
        //accepting data from user
    const {name,username,email,description} = req.body
    console.log(email)

    //checking user exisitence if user is already present i will error
    const existedUser = await User.findOne({$or:[{name},{email}]})
    if(existedUser){
       return  res.status(409).json({
            status:'fail',
            message:'user is already existed'
        })
    }

    //handling photos
    const imagePath = req.files?.photo[0]?.path;
    console.log(req.files)

    if(!imagePath){
        return res.status(500).json({
            status:'failed',
            message:'photo is missing'
        })
    }

   const image = await uploadCloudinary(imagePath);
   const file = await  User.create({
        name,
        email,
        username:username.toLowerCase(),
        description,
        photo:image.url
    })

    const createduser = await User.findById(file._id)
    if(createduser){
        return res.status(200).json({
            status:'sucssful',
            data:createduser
            
        })
    }
    res.status(201).json({
        message:'user is created succesfully',
        createduser
    })
  
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:'files are not created succesfull',
            err:err
        })
    }
}

module.exports = uploadingFile