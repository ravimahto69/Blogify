'use client'
import { Button, Card, Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {

  const SignUp =(values)=>{
     
      
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
        name= 'E-mail'
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