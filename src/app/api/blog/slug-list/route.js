import "@/lib/db"
import { NextResponse as res } from "next/server"
import BlogSchema from "@/schema/blog.schema"


export const GET = async(req) =>{
    const titles = await BlogSchema.distinct("title")
    const slugs = titles.map((item)=>item.split(" ").join("-"))
    return res.json({slugs})
}