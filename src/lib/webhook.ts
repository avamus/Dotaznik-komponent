export class WebhookHandler {
  private url: string
  private retryAttempts: number
  private retryDelay: number

  constructor(url: string, retryAttempts = 3, retryDelay = 1000) {
    this.url = url
    this.retryAttempts = retryAttempts
    this.retryDelay = retryDelay
  }

  async send(data: any) {
    let lastError: Error | null = null
    
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Attempt': attempt.toString()
          },
          body: JSON.stringify(data)
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        return await response.json()
      } catch (error) {
        lastError = error as Error
        if (attempt < this.retryAttempts) {
          await this.delay(this.retryDelay * attempt)
        }
      }
    }

    throw lastError
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const sendWebhook = async (url: string, data: any) => {
  const webhook = new WebhookHandler(url)
  return webhook.send(data)
}
