import BlogSchema from "@/schema/blog.schema";
import { message } from "antd";
import { NextResponse as res } from "next/server";

export const PUT = async (request,{params})=>{
    try{
        const {id} = await params
        const body = await request.json()
        const blog = await BlogSchema.findByIdAndUpdate(id,body,{new:true})

        if(!blog){
            return res.json(
                {success:false,message:"Blog not found"},
                {status:404}
            )
        }
        return res.json(blog)
    }
    catch(err){
        return res.json(
            {success:false,message:err.message},
            {status:500}
        )
    }
    
}
export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params   

    const blog = await BlogSchema.findByIdAndDelete(id)

    if (!blog) {
      return res.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      )
    }

    return res.json({
      success: true,
      message: "Blog deleted successfully",
      blog
    })

  } catch (err) {
    return res.json(
      { success: false, message: err.message },
      { status: 500 }
    )
  }
}

export const GET = async (request,{params})=>{
  try{
    const {id} = await params
    const blog = await BlogSchema.findById(id)
    if(!blog){
        return res.json(
            {success:false,message:"Blog not found"},
            {status:404}
        )
    }
    return res.json(blog)
  }
  catch(err){
    return res.json(
        {success:false,message:err.message},
        {status:500}
    )
  }
}