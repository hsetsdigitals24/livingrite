import { ApiResponse } from '@/types';
import { subscribeToNewsletter } from '@/lib/mailchimp';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json<ApiResponse<any>>(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Save lead
    await prisma.lead.create({
      data: {
        email,
        name,
        source: 'newsletter',
        status: 'NEW',
      },
    });

    // Subscribe to Mailchimp
    await subscribeToNewsletter(email);

    return NextResponse.json<ApiResponse<any>>(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json<ApiResponse<any>>(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
