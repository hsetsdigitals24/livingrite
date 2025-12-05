// Paystack payment utilities
import axios from 'axios';
import { ApiResponse, PaymentInitResponse } from '@/types';

const PAYSTACK_API_BASE = 'https://api.paystack.co';

export interface InitializePaymentParams {
  email: string;
  amount: number; // Amount in kobo (smallest unit)
  reference?: string;
  callbackUrl?: string;
  metadata?: Record<string, any>;
}

export interface VerifyPaymentParams {
  reference: string;
}

const paystackClient = axios.create({
  baseURL: PAYSTACK_API_BASE,
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json',
  },
});

export async function initializePayment(
  params: InitializePaymentParams
): Promise<PaymentInitResponse> {
  try {
    const response = await paystackClient.post('/transaction/initialize', {
      email: params.email,
      amount: params.amount,
      reference: params.reference,
      callback_url: params.callbackUrl,
      metadata: params.metadata,
    });

    return response.data.data;
  } catch (error) {
    console.error('Paystack initialization error:', error);
    throw new Error('Failed to initialize payment');
  }
}

export async function verifyPayment(reference: string): Promise<any> {
  try {
    const response = await paystackClient.get(
      `/transaction/verify/${reference}`
    );

    return response.data.data;
  } catch (error) {
    console.error('Paystack verification error:', error);
    throw new Error('Failed to verify payment');
  }
}

export async function getBalance(): Promise<any> {
  try {
    const response = await paystackClient.get('/balance');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw new Error('Failed to fetch balance');
  }
}
