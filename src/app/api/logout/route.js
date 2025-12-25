import { NextResponse as res } from 'next/server'

export const POST = async () => {
  const response = res.json({ message: 'Logout successful' })

  response.cookies.set('accessToken', '', { maxAge: 0, path: '/' })
  response.cookies.set('refreshToken', '', { maxAge: 0, path: '/' })

  return response
}
