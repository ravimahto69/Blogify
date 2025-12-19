import '@/lib/db'
import UserSchema from '@/schema/user.schema'
import { message } from 'antd'
import { NextResponse as res } from "next/server"


export const POST = async (request)=>{
   try{
    const body = await request.json()
    const user = new UserSchema(body)
    await user.save()
    return res.json({
        success:true,
        message:"Send Successfull"
    })
   }

   catch(err){
     return res.json(
        {success:false,message:err.message},
        {status:501}
     )
   }
}