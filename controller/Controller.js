import SendMail from "../components/Mail.js"
import modelofdata from "../dataBase/Model.js"


export const first=async (req,res)=>{

try {
    const data=await modelofdata.find({})
    return res.status(200).send(data)
    // console.log(data)
    
} catch (error) {
    
}

    
}


export const sendMaill=async(req,res)=>{
    // console.log(req.body.dataOfSelectedUser)


    await SendMail(req.body.dataOfSelectedUser)
    res.status(200).send("email sent")


}


export const saveUserDetail=async (req,res)=>{

// console.log(req.body)
const statusOfinsert=await modelofdata(req.body.AllInputData)
await statusOfinsert.save()
res.status(200).send("saved user")


}


export const getdataForUpdate=async (req,res)=>{

    
    const dataforsend =await modelofdata.findOneAndUpdate({Name:req.params.Name,Email:req.params.Email,Phone:req.params.Phone},{Name:req.body.AllInputData.Name,Email:req.body.AllInputData.Email,Phone:req.body.AllInputData.Phone,Hobby:req.body.AllInputData.Hobby})
    
    
    
    res.status(200).send("updated successfully")
    
}

export const deleteReq=async (req,res)=>{
    
   
    const dataforsend =await modelofdata.findOneAndDelete({Name:req.params.Name,Email:req.params.Email,Phone:req.params.Phone})

    res.status(200).send("deleted")
}