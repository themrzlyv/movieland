import User from '../../models/User'
import DbConnect from '../../helpers/DbConnect'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

DbConnect()

export default async (req,res) => {
    const {email,password} = req.body
    try {
        if(!email || !password){
            res.status(422).json({error: 'You have to fill all inputs'})
        }
        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({error: 'This user is not found'})
        }

        const doMatch = await bcrypt.compare(password,user.password)
        if(doMatch){
            const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                expiresIn: '7d'
            })
            const {name,role,email} = user
            res.status(201).json({token,user:{name,role,email}})
        } else {
            res.status(404).json({error: 'Email or password is wrong'})
        }
    } catch (error) {
        console.log(error)
    }
}