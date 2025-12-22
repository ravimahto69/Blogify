"use client";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import Card from "antd/es/card/Card";
import axios from "axios";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";

/* -------------------- Fetcher -------------------- */
const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw err;
  }
};

/* -------------------- Component -------------------- */
const Admin = () => {
  const [currentEditId, setCurrentEditId] = useState(null);
  const [form] = Form.useForm();

  const { data } = useSWR("/api/blog", fetcher);

  /* -------------------- Create Blog -------------------- */
  const createBlog = async (values) => {
    try {
      await axios.post("/api/blog", values, {
        headers: { "Content-Type": "application/json" },
      });

      await axios.post("/api/cache/clear", {
        paths: ["/blog"],
      });

      mutate("/api/blog");
      form.resetFields();
    } catch (err) {
      message.error(err.response?.data?.message || err.message);
    }
  };

  /* -------------------- Delete Blog -------------------- */
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blog/${id}`);
      mutate("/api/blog");
    } catch (err) {
      message.error(err.message);
    }
  };

  /* -------------------- Edit Blog -------------------- */
  const updateBlog = (item) => {
    form.setFieldsValue(item);
    setCurrentEditId(item._id);
  };

  /* -------------------- Save Blog -------------------- */
  const saveBlog = async (values) => {
    try {
      await axios.put(`/api/blog/${currentEditId}`, values, {
        headers: { "Content-Type": "application/json" },
      });

      mutate("/api/blog");
      form.resetFields();
      setCurrentEditId(null);
    } catch (err) {
      message.error(err.message);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* ---------- Form Section ---------- */}
      <div className="col-span-7">
        <h1 className="text-4xl mb-8 font-bold">New Blog</h1>

        <Form
          layout="vertical"
          form={form}
          onFinish={currentEditId ? saveBlog : createBlog}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Enter your blog title here" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={10}
              placeholder="Enter your blog description"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              danger={!!currentEditId}
              htmlType="submit"
              size="large"
            >
              {currentEditId ? "Save" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* ---------- Blog List Section ---------- */}
      <div className="col-span-5 flex flex-col space-y-6">
        {data?.map((item) => (
          <Card
            key={item._id}
            hoverable
            actions={[
              <EditOutlined
                key="edit"
                onClick={() => updateBlog(item)}
              />,
              <DeleteOutlined
                key="delete"
                onClick={() => deleteBlog(item._id)}
              />,
            ]}
          >
            <h1 className="text-xl capitalize font-semibold">
              {item.title}
            </h1>
            <p className="text-gray-500 text-sm">
              {item.description.slice(0, 60)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Admin;
