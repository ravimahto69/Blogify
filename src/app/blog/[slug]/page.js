import Slug from '@/components/Slug';
import React from 'react'

export const generateMetadata=({params})=>{
  return{
    title:"Ravi - Blog - "+ params.slug.split("-").join(" ")
  }
}

const SlugRoute = ({params}) => {
  return (
    <div><Slug title={params.slug}/></div>
  )
}

export default SlugRoute