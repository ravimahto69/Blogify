"use client"

import { Button, Card, Form, Input, message } from "antd"
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons"

const Contact = () => {
  const [form] = Form.useForm()

 const onFinish = async (values) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }

    message.success("Message submitted successfully!")
    form.resetFields()
  } catch (err) {
    message.error(err.message || "Something went wrong")
  }
}


  return (
    <Card
      title="Contact Us"
      hoverable
      className="shadow-lg "
    >
      <p className="text-black mb-6 font-bold">
        Have a question or feedback? We'd love to hear from you.
      </p>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Enter your name" }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="Your name"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input
            size="large"
            prefix={<MailOutlined />}
            placeholder="you@example.com"
          />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Enter your message" }]}
        >
          <Input.TextArea
            rows={5}
            placeholder="Write your message..."
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            block
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Contact
