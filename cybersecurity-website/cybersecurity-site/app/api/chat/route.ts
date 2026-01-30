import { Anthropic } from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'

/**
 * Chat API Route
 * Handles communication with Claude (Anthropic) AI
 * Provides intelligent responses about MMSEG cybersecurity services
 * 
 * Environment Variables Required:
 * - ANTHROPIC_API_KEY: Your Anthropic API key from https://console.anthropic.com
 */

// Initialize Anthropic client
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

/**
 * System prompt for Claude
 * Defines the AI's role, knowledge base, and behavior
 * Includes information about MMSEG services to provide accurate responses
 */
const SYSTEM_PROMPT = `You are an intelligent customer support assistant for MMSEG, a professional cybersecurity and infrastructure company.

MMSEG Services:
1. Data Protection - Advanced encryption (AES-256), automatic backups, GDPR compliance
2. Access Management - MFA/2FA, SSO Enterprise, role-based access control
3. 24/7 Monitoring - Threat detection, log analysis, daily reports
4. Incident Response - Immediate response, forensic analysis, recovery planning
5. Secure Infrastructure - Cloud security, redundancy, scalability, on-premise options
6. Security Audits - Penetration testing, vulnerability analysis, detailed reports

Solution Types:
- Enterprise Solutions: Multi-layer architecture, ISO 27001 compliance, 24/7 support, 99.99% SLA
- SME Solutions: Quick implementation, predictable costs, flexible scaling, included support
- E-commerce Solutions: PCI DSS compliance, payment protection, fraud prevention, SSL/TLS certificates

Your role:
- Answer questions about MMSEG services and solutions
- Provide technical information about cybersecurity and infrastructure
- Qualify leads by understanding their needs
- Be professional, helpful, and concise
- If asked about pricing, suggest contacting sales at contacto@mmseg.com
- Always encourage scheduling a free consultation

Tone: Professional, friendly, helpful, and knowledgeable.
Language: Respond in the same language as the user (Spanish or English).`

/**
 * POST /api/chat
 * Receives user messages and returns Claude's response
 * 
 * Request body:
 * {
 *   messages: Array<{ role: 'user' | 'assistant', content: string }>
 * }
 * 
 * Response:
 * {
 *   message: string (Claude's response)
 * }
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const { messages } = await request.json()

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    // Check for API key
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    // Call Claude API with conversation history
    // Claude maintains context from previous messages for coherent conversations
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022', // Latest Claude model for best performance
      max_tokens: 1024, // Limit response length for chat widget
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    })

    // Extract text from response
    // Claude returns content array with text blocks
    const assistantMessage = response.content
      .filter((block) => block.type === 'text')
      .map((block) => (block.type === 'text' ? block.text : ''))
      .join('')

    // Return response to client
    return NextResponse.json({
      message: assistantMessage,
    })
  } catch (error) {
    // Log error for debugging
    console.error('Chat API error:', error)

    // Return appropriate error response
    if (error instanceof Error) {
      // Handle specific Anthropic API errors
      if (error.message.includes('401') || error.message.includes('authentication')) {
        return NextResponse.json(
          { error: 'Authentication error - check API key' },
          { status: 401 }
        )
      }
      if (error.message.includes('429') || error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Rate limit exceeded - please try again later' },
          { status: 429 }
        )
      }
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
