import User from '../../models/User'
import BookMark from '../../models/Bookmark'
import DbConnect from '../../helpers/DbConnect'
import bcrypt from 'bcryptjs'

DbConnect();

export default async (req,res)=>{
    const {name,email,password} = req.body
    try{
        if(!name || !email || !password){
            return res.status(422).json({error:"please ass all the fields"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(422).json({error:"user already exists with that email"})
        }
        const hashedPassword = await bcrypt.hash(password,12)
        const newUser =  await new User({
            name,
            email,
            password:hashedPassword
        }).save()
        await new BookMark({user:newUser._id}).save()
        res.status(201).json({message:"signup success"})
    }catch(err){
        console.log(err)
    }
}