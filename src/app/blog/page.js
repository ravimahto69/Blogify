import Blog from '@/components/Blog';

export const metadata = {
  title: "Blog"
};

const blog = async () => {
  const res = await fetch(`${process.env.SERVER}/api/blog`, {
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  });

  const data = await res.json();

  return <Blog data={data} />;
};

export default blog;
