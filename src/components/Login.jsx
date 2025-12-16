'use client'
import { Button, Card, Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  const Login=(values)=>{
    console.log(values);
    
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <Card hoverable className='w-6/12 shadow-lg'>
      <h1 className='font-semibold text-2xl flex justify-center items-center'>SignIn</h1>
      <Form layout='vertical' onFinish={Login}>
       
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
          <Button size='large'className='w-full' htmlType='submit' type='primary'>SignIn</Button>
        </Form.Item>
      </Form>
      <div className='flex items-center gap-3 '>
        <label>Don't have a Account ?</label>
        <Link href='/sign-up' className='text-blue-600 font-medium'>Register now</Link>
      </div>
      </Card>
    </div>
  )
}

export default Login