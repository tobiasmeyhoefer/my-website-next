import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'application.pdf')
  const fileBuffer = fs.readFileSync(filePath)

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Disposition': 'attachment; filename=application.pdf',
      'Content-Type': 'application/pdf',
    },
  })
}