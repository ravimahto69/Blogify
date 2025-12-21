import Blog from '@/components/Blog';



const blog = async () => {
  const res = await fetch(`${process.env.SERVER}/api/blog`, {
    next: { revalidate: 86400 }, // ✅ REQUIRED
  });

  const data = await res.json();

  return <Blog data={data} />;
};

export default blog;
