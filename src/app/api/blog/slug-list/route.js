import { NextResponse } from "next/server";
import BlogSchema from "@/schema/blog.schema";
import connectDB from "@/lib/db";

export const GET = async () => {
  try {
    await connectDB(); // ✅ connect only at runtime

    const titles = await BlogSchema.distinct("title");
    const slugs = titles.map((item) =>
      item.toLowerCase().replace(/\s+/g, "-")
    );

    return NextResponse.json({ slugs });
  } catch (error) {
    console.error("slug-list error:", error);
    return NextResponse.json({ slugs: [] }, { status: 500 });
  }
};


