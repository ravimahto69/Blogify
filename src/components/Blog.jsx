import { Card } from "antd";
import Link from "next/link";
import React from "react";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <Link key={index} href={`/blog/${item.title.split(" ").join("-")}`}>
          <Card hoverable className="shadow">
            <h1 className="text-lg capitalize">{item.title}</h1>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
