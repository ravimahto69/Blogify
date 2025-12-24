import Slug from "@/components/Slug";

// Force runtime rendering
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  return {
    title: `Blogify - ${params.slug}`,
    description: `Read blog ${params.slug} on Blogify`,
  };
}

const SlugRoute = async ({ params }) => {
  try {
    const res = await fetch(`/api/blog/${params.slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return <Slug title={params.slug} data={null} />;
    }

    const data = await res.json();
    return <Slug title={params.slug} data={data} />;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return <Slug title={params.slug} data={null} />;
  }
};

export default SlugRoute;
