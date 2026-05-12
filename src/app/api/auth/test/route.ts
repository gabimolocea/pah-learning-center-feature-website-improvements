import { NextResponse } from 'next/server'

export async function GET() {
  const envVars = {
    hasSitePassword: !!process.env.SITE_PASSWORD,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    // Don't log the actual password for security
    passwordLength: process.env.SITE_PASSWORD?.length || 0,
    allEnvKeys: Object.keys(process.env).filter(key => 
      key.includes('SITE') || key.includes('PASSWORD') || key.includes('AUTH')
    )
  }
  
  return NextResponse.json(envVars)
} 