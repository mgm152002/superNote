import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user_id: {  
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
   desc:{
     type:String,
   },
   editable:{
     type:Boolean,
     default:false
   },
   editableBy:{
     type:String,
     default:null
   },
   
})
export default mongoose.models.Note || mongoose.model('Note',noteSchema)