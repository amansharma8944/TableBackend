import mongoose from "mongoose"

export const Connect=async ()=>{
    try {
      let aman=await mongoose.connect(`mongodb+srv://amandeepsharma28032004:amandeep@project1.y98wgwv.mongodb.net/googleclassroom`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connection successfull")
        // console.log(aman)
    } catch (error) {
        console.log("error while connecting database")
        console.log(error)
    }
}