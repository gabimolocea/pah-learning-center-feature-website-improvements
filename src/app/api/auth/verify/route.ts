import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    // Get the password from environment variables
    const correctPassword = process.env.SITE_PASSWORD
    
    // Add debugging information (will be removed after fixing)
    console.log('Environment check:', {
      hasEnvVar: !!correctPassword,
      envVarLength: correctPassword?.length,
      receivedPasswordLength: password?.length,
      nodeEnv: process.env.NODE_ENV
    })
    
    if (!correctPassword) {
      console.error('SITE_PASSWORD environment variable is not set')
      return NextResponse.json(
        { error: 'Server configuration error - environment variable not found' }, 
        { status: 500 }
      )
    }
    
    // Trim whitespace from both passwords for comparison
    const trimmedCorrectPassword = correctPassword.trim()
    const trimmedSubmittedPassword = password?.trim() || ''
    
    if (trimmedSubmittedPassword === trimmedCorrectPassword) {
      console.log('Authentication successful')
      return NextResponse.json(
        { success: true, message: 'Authentication successful' }, 
        { status: 200 }
      )
    } else {
      console.log('Authentication failed - password mismatch')
      return NextResponse.json(
        { success: false, message: 'Invalid password' }, 
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Invalid request' }, 
      { status: 400 }
    )
  }
} 