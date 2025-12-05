import { prisma } from '@/lib/prisma';
import { ApiResponse } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json<ApiResponse<any>>(
        { success: false, message: 'Email and password required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json<ApiResponse<any>>(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    // TODO: Hash password before storing
    const user = await prisma.user.create({
      data: {
        email,
        name: name || email.split('@')[0],
        passwordHash: password, // In production, hash this
      },
    });

    return NextResponse.json<ApiResponse<any>>(
      {
        success: true,
        message: 'User registered successfully',
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json<ApiResponse<any>>(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
