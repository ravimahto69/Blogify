import Blog from '@/components/Blog';

export const metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  let data = [];

  try {
    const res = await fetch(`${process.env.SERVER}/api/blog`, {
      next: { revalidate: 600 }, // 10 minutes
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs");
      return <Blog data={[]} />;
    }

    data = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    data = [];
  }

  return <Blog data={data} />;
};

export default BlogPage;
