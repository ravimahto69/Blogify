import Slug from "@/components/Slug";


export const generateMetadata = ({params}) =>{
  return {
    title:`Blogify-Blog-`+params.slug
  }
}
// Dynamic Route Component
const  SlugRoute = async ({params})=>{
  const res = await fetch (`${process.env.SERVER}/api/blog/${params.slug}`)
  let data = null
  if(!res.ok)
    data = []
  data = await res.json()
  return <Slug title={params.slug} data={data}/>
}
export default SlugRoute

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.SERVER}/api/blog/slug-list`, {
      cache: "no-store",
    })

    if (!res.ok) {
      return []
    }

    const json = await res.json()
    const slugs = Array.isArray(json.data) ? json.data : []

    return slugs.map((slug) => ({ slug }))
  } catch (error) {
    // Build will NOT fail
    console.error("generateStaticParams error:", error)
    return []
  }
}

