'use client'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import Card from 'antd/es/card/Card'
import axios from 'axios'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    throw err
  }
}

const Admin = () => {

  const[currentEditId,setCurrentEditId] = useState(null)
  const [form] =Form.useForm()
  const { data } = useSWR('/api/blog', fetcher)


  const createBlog = async (values) => {
    try {
      await axios.post(
        '/api/blog',
        values,
        { headers: { 'Content-Type': 'application/json' } }
      )
     mutate("/api/blog")
     form.resetFields()
    } catch (err) {
      message.error(err.response?.data?.message || err.message)
    }
  }
  const deleteBlog = async (id)=>{
    try{
      await axios.delete(`/api/blog/${id}`)
      mutate("/api/blog")
    }
    catch(err){
      message.error(err.message)
    }
  }
const updateBlog = (item)=>{
    form.setFieldsValue(item)
    setCurrentEditId(item._id)
}
const saveBlog = async (values)=>{
    try{
        await axios.put(`/api/blog/${currentEditId}`,values,{"Content-Type": "application/json"})
        mutate("/api/blog")
        form.resetFields()
        setCurrentEditId(null)
    }
    catch(err){
      message.error(err.message)
    }
}

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-7">
        <h1 className="text-4xl mb-8 font-bold">New Blog</h1>

        <Form layout="vertical" onFinish={ currentEditId ? saveBlog : createBlog} form={form}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter your blog title here" />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={10} placeholder="Enter your blog description" />
          </Form.Item>
          {
            currentEditId  ?
             <Form.Item>
            <Button type="primary" danger htmlType="submit" size="large">
              Save
            </Button>
          </Form.Item> :

            <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Create
            </Button>
          </Form.Item> 
          }
        </Form>
      </div>
      <div className="col-span-5 space-y-6">
        {
          data && data.map((item,index)=>{
            return(
            <Card key={index} hoverable
              actions={[
               <EditOutlined key="edit" onClick={()=>updateBlog(item)}/>,
               <DeleteOutlined key="delete" onClick={()=>deleteBlog(item._id)}/>
              ]}
             >
              <h1 className='text-xl capitalize font-semibold'>{item.title}</h1>
              <p className='text-gray-500 text-sm'>{item.description.slice(0,60)}</p>
            </Card>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default Admin
