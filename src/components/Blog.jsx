'use client'
import { Card } from 'antd'
import React from 'react'

const Blog = ({ data }) => {
  return (
    <div>
      <div className="w-8/12 mx-auto flex flex-col gap-4 ">
        {data?.map((item, index) => (
          <Card key={index} className="mb-4  hover:shadow-lg">
            <h1 className="capitalize text-2xl font-semibold ">
              {item.title}
            </h1>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog
