import BlogSchema from "@/schema/blog.schema";
import dbConnect from "@/lib/db";
import { NextResponse as res } from "next/server";

export const POST = async (request) => {
  try {
    await dbConnect();   // 🔴 IMPORTANT

    const body = await request.json();
    const blog = new BlogSchema(body);
    await blog.save();

    return res.json(blog);
  } catch (err) {
    return res.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await dbConnect();   // 🔴 IMPORTANT

    const blogs = await BlogSchema.find().sort({ createdAt: -1 });
    return res.json(blogs);
  } catch (err) {
    return res.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
