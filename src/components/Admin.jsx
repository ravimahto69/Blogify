'use client'
import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import React from 'react'

const Admin = () => {

  const createBlog = async (values)=>{
  
    
    try{
       const {data} =  await axios.post('/api/blog',values,{'Content-Type': 'application/json'})
       console.log(data);
       
    }
    catch(err){
        message.error(err.response.data.message || err.message)
    }
    
  }



  return (
<div className='grid grid-cols-12 gap-8'>
      <div className='col-span-7'>
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
      <div className='col-span-5'>
      </div>
</div>

  )
}

export default Admin