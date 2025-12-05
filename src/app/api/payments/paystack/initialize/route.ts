import { ApiResponse } from '@/types';
import { initializePayment } from '@/lib/paystack';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, amount, reference, metadata } = await request.json();

    const paymentData = await initializePayment({
      email,
      amount: amount * 100, // Convert to kobo
      reference,
      metadata,
      callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/paystack/callback`,
    });

    return NextResponse.json<ApiResponse<any>>(
      {
        success: true,
        message: 'Payment initialized',
        data: paymentData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Payment initialization error:', error);
    return NextResponse.json<ApiResponse<any>>(
      { success: false, message: 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
