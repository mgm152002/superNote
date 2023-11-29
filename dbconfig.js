import mongoose from 'mongoose';

export default async  function dbConnect() {
    try{
        mongoose.connect(process.env.MONGO)
        const connection = mongoose.connection
        connection.on('success',()=>{console.log('connected to db')})
        connection.on('error',(err)=>{console.log('error connecting to db')})


    }
    catch(e){
        console.log(e)
    }
    
}