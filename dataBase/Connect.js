import mongoose from "mongoose"

export const Connect=async ()=>{
    try {
      await mongoose.connect(`mongodb+srv://${process.env.USERNAME_MONGO}:${process.env.PASSWORD_MONGO}@project1.y98wgwv.mongodb.net/googleclassroom`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connection successfull")
    } catch (error) {
        console.log("error while connecting database")
        console.log(error)
    }
}