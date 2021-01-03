import mongoose from 'mongoose'
const  {ObjectId} = mongoose.Schema.Types


const BookMarkScheme = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    movielist: [
        {
            quantity:{type:Number,default:1},
            movie:{type:ObjectId}
        }
    ]
})

export default mongoose.models.BookMark || mongoose.model('BookMark' , BookMarkScheme)