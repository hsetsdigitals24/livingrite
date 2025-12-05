import { ApiResponse, Booking } from '@/types';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        client: true,
      },
      orderBy: {
        scheduledDate: 'asc',
      },
    });

    return NextResponse.json<ApiResponse<Booking[]>>({
      success: true,
      data: bookings as any,
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json<ApiResponse<any>>(
      { success: false, message: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const booking = await prisma.booking.create({
      data: {
        clientId: data.clientId,
        serviceType: data.serviceType,
        scheduledDate: new Date(data.scheduledDate),
        consultationType: data.consultationType,
        notes: data.notes,
      },
    });

    return NextResponse.json<ApiResponse<Booking>>(
      {
        success: true,
        message: 'Booking created successfully',
        data: booking as any,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create booking error:', error);
    return NextResponse.json<ApiResponse<any>>(
      { success: false, message: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
