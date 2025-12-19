'use client'
import { Button, Form, Input } from 'antd'
import React from 'react'

const AdminRoute= () => {

  const createBlog = (values)=>{
    console.log(values);
    
  }



  return (
    <div>
      <h1 className="text-4xl mb-8 font-bold">New Blog</h1>
      <Form layout='vertical' onFinish={createBlog}>
        <Form.Item label ='Title' name='title' rules={[{required:true}]}>
          <Input size="large" placeholder='Enter your blog title here '/>
        </Form.Item>

        <Form.Item label ='Description' name='description' rules={[{required:true}]}>
          <Input.TextArea size="large" placeholder='Enter your blog description ' rows={10}/>
        </Form.Item>

        <Form.Item >
          <Button type='primary' htmlType='submit' size='large'>Create</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AdminRoute