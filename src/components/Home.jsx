"use client"

import { Card, Row, Col, Typography, Button, Skeleton } from "antd"
import Link from "next/link"
import useSWR from "swr"
import axios from "axios"

const { Title, Paragraph } = Typography

const fetcher = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const Home = () => {
  const { data, isLoading } = useSWR("/api/blog", fetcher)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* ---------- HERO SECTION ---------- */}
      <div className="text-center mb-16">
        <Title level={1}>Welcome to My Blog ✨</Title>
        <Paragraph className="text-gray-500 text-lg">
          Web development explained through real-world problems and code.
        </Paragraph>

        <Link href="/blog">
          <Button type="primary" size="large">
            Explore Blogs
          </Button>
        </Link>
      </div>

      {/* ---------- BLOG LIST ---------- */}
      <Title level={2} className="mb-8">
        Latest Posts
      </Title>

      <Row gutter={[24, 24]}>
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <Col span={8} key={i}>
              <Skeleton active />
            </Col>
          ))}

        {data?.map((blog) => (
          <Col xs={24} md={12} lg={8} key={blog._id} >
            <Link href={`/blog/${blog.title.split(" ").join("-")}`}>
              <Card hoverable className="h-full shadow-md ">
                <Title level={4} className="capitalize">
                  {blog.title}
                </Title>
                <Paragraph className="text-gray-500">
                  {blog.description.slice(0, 100)}...
                </Paragraph>

                <Button type="link" className="p-0">
                  Read more →
                </Button>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
