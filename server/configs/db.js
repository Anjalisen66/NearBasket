import mongoose from 'mongoose'
 const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected',()=>
            console.log("db connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/nearbasket`,{
         useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    } catch (error) {
        console.log('MongoDB connection error:',error.message)
    }
 }

 export default connectDB;