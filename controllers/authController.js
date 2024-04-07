import usermodel from "../models/usermodel.js";
import {hashPassword} from"./../helpers/authHelper.js";

export const registerController=async(req,res)=>{
try{
const{name,email,password,phone,address}=req.body

if(!name){
    return res.send({error:'Name is required'})
}
if(!email){
    return res.send({error:'Name is Required'})
}
if(!password){
    return res.send({error:'Name is Required'})
}
if(!phone){
    return res.send({error:'Name is Required'})
}
if(!address){
    return res.send({error:'Name is Required'})
}
const existinguser=await usermodel.findOne({email})
if(existinguser){
    return res.status(200).send({
        success:true,
        message:'already registered',
    })
}
const hashedPassword=await hashPassword(password)

const user= await new usermodel({name,email,password,phone,address:hashedPassword}).save()
res.status(201).send({
    success:true,
    message:'register',
    user
})}
catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Registration',
        error
    })
}
};