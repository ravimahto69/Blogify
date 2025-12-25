import Blog from "@/components/Blog";
import BlogSchema from "@/schema/blog.schema";
import dbConnect from "@/lib/db";

export const metadata = {
  title: "Blogify | Blog",
};

const BlogPage = async () => {
  await dbConnect();

  const data = await BlogSchema.find().sort({ createdAt: -1 });

  return <Blog data={JSON.parse(JSON.stringify(data))} />;
};

export default BlogPage;
