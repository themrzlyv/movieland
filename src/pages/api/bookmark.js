import jwt from 'jsonwebtoken'
import BookMark from '../../models/Bookmark'

export default async (req,res) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"you have to been loggin"})
    }

    try {
        const {userId} = jwt.verify(authorization,process.env.JWT_SECRET)
        const bookmark = await BookMark.findOne({user:userId})
        res.status(200).json(bookmark.movielist)
    } catch (error) {
        return res.status(401).json({error:"you have to been loggin"})
    }
}