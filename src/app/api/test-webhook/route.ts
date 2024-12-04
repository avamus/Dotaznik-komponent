import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { webhookUrl } = await request.json()
    
    // Send test data to webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: true,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('Webhook test failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to test webhook' },
      { status: 500 }
    )
  }
}
