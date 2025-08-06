import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const { firstName, lastName, email, phone, service, budget, timeline, message } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Here you would typically:
        // 1. Send email notification
        // 2. Save to database
        // 3. Add to CRM
        // 4. Send confirmation email to user

        // For now, we'll just log and return success
        console.log('Contact form submission:', {
            firstName,
            lastName,
            email,
            phone,
            service,
            budget,
            timeline,
            message,
            submittedAt: new Date().toISOString()
        })

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message. We\'ll be in touch soon!'
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)

        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        )
    }
}