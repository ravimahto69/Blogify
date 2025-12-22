'use client'
import { Button, Card, Form, Input, message } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  const handleLogin = async (values) => {
    try {
      await axios.post(
        '/api/login',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      router.push('/admin')
    } catch (err) {
      message.error(err.response?.data?.message || err.message)
    }
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <Card hoverable className='w-6/12 shadow-lg'>
        <h1 className='font-semibold text-2xl flex justify-center items-center'>
          SignIn
        </h1>

        <Form layout='vertical' onFinish={handleLogin}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input size="large" placeholder='example123@gmail.com' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password size="large" placeholder='**********' />
          </Form.Item>

          <Form.Item>
            <Button
              size='large'
              className='w-full'
              htmlType='submit'
              type='primary'
            >
              SignIn
            </Button>
          </Form.Item>
        </Form>

        <div className='flex items-center gap-3'>
          <label>Don't have an account?</label>
          <Link href='/sign-up' className='text-blue-600 font-medium'>
            Register now
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Login
