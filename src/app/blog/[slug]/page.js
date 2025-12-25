import Slug from "@/components/Slug";
import BlogSchema from "@/schema/blog.schema";
import dbConnect from "@/lib/db";

/* 🔥 PAGE TITLE (SEO) */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Next.js 15 rule

  const titleFromSlug = slug.replace(/-/g, " ");

  return {
    title: `Blogify | ${titleFromSlug}`,
    description: `${titleFromSlug} explained in simple words on Blogify.`,
  };
}

/* 🔥 PAGE CONTENT */
const SlugRoute = async ({ params }) => {
  const { slug } = await params;

  await dbConnect();

  const title = slug.replace(/-/g, " ");
  const blog = await BlogSchema.findOne({ title });

  return (
    <Slug
      title={slug}
      data={JSON.parse(JSON.stringify(blog))}
    />
  );
};

export default SlugRoute;
