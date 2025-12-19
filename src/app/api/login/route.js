import UserSchema from '@/schema/user.schema';
import { NextResponse as res } from 'next/server';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const getToken = (payload)=>{
    const acessToken = jwt.sign(payload,process.env.ACESSS_TOKEN_SECRET ,{expiresIn:'15m'})
    const refreshToken = jwt.sign(payload,process.env.ACESSS_TOKEN_SECRET,{expiresIn:'7d'})
    return {
        acessToken,
        refreshToken
    }
}


export const POST = async (request)=>{
    try{
        const {email,password} = await request.json()
        const user = await UserSchema.findOne({email})

        if(!user){
            return res.json(
                {message:"User not found"}, 
                {status:404})
        }   
         const token = getToken({
            id : user._id,
            fullname : user.fullname,
            email:  user.email
             })
        
             

        const isLogin = await bcrypt.compare(password, user.password)
        if(!isLogin){
            return res.json(
                {message:"Invalid credentials"}, 
                {status:401})
  
        }
        const result =  res.json(
            {message:"Login successful"}, 
            {status:200})
         result.cookies.set("acessToken",token.acessToken,{
                httpOnly:true,
                path:"/",
                secure: process.env.PROD === "true" ? true:false
         })   
         result.cookies.set("refreshToken",token.refreshToken,{
                httpOnly:true,
                path:"/",
                secure: process.env.PROD === "true" ? true:false
         })  
         return result
    }
    catch(error){
        return res.json(
            {message:"Internal server error"}, 
            {status:500})
    }
}