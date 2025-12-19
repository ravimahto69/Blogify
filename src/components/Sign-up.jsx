'use client'
import { Button, Card, Form, Input, message } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter()

  const SignUp = async (values)=>{
    try{
      await axios.post('/api/sign-up' ,values,{'Content-Type': 'application/json'})  
      router.push('/login')
    }
    catch(err){
      message.error(err.response.data.message || err.message)
    }
     
      
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <Card hoverable className='w-6/12 shadow-lg'>
      <h1 className='font-semibold text-2xl flex justify-center items-center'>Register</h1>
      <Form layout='vertical' onFinish={SignUp}>
        <Form.Item
        label = "Fullname"
        name= 'fullname'
        rules={[{required:true}]}
        >
        <Input size="large" placeholder='Ravi'/>
        </Form.Item>

          <Form.Item
        label = "E-mail"
        name= 'email'
        rules={[{required:true}]}
        >
        <Input size="large" placeholder='example123@gmail.com'/>
        </Form.Item>

        <Form.Item
        label = "Password"
        name= 'password'
        rules={[{required:true}]}
        >
        <Input size="large" placeholder='**********' type="password"/>
        </Form.Item>
        <Form.Item>
          <Button size='large' htmlType='submit' type='primary' className='w-full'>SignUp</Button>
        </Form.Item>
      </Form>
      <div className='flex items-center gap-3'>
        <label>Already have a Account ?</label>
        <Link href='/login' className='text-blue-600 font-medium'>SignIn</Link>
      </div>
      </Card>
    </div>
  )
}

export default SignUp