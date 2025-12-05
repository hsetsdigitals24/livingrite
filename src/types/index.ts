// User & Auth Types
export type UserRole = 'CLIENT' | 'ADMIN' | 'CAREGIVER';

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
  userId: string;
  patientName: string;
  relationship: string;
  serviceType: string;
  subscriptionTier?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Booking Types
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'REFUNDED';

export interface Booking {
  id: string;
  clientId: string;
  serviceType: string;
  scheduledDate: Date;
  status: BookingStatus;
  consultationType: string;
  amount?: number;
  paymentStatus?: PaymentStatus;
  calendlyEventId?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Care Update Types
export interface CareUpdate {
  id: string;
  clientId: string;
  authorId: string;
  title: string;
  content: string;
  mediaUrls: string[];
  createdAt: Date;
  isUrgent: boolean;
  readAt?: Date;
}

// Document Types
export interface Document {
  id: string;
  clientId: string;
  name: string;
  type: 'prescription' | 'test_result' | 'care_plan' | 'other';
  url: string;
  fileSize?: number;
  uploadedAt: Date;
}

// Invoice Types
export interface Invoice {
  id: string;
  clientId: string;
  invoiceNumber: string;
  amount: number;
  status: PaymentStatus;
  dueDate: Date;
  paidAt?: Date;
  paystackRef?: string;
  stripeRef?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  subject?: string;
  content: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Lead Types
export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'LOST';

export interface Lead {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  source: string;
  status: LeadStatus;
  tags: string[];
  notes?: string;
  createdAt: Date;
  convertedAt?: Date;
  updatedAt: Date;
}

// Sanity Content Types
export interface ServiceContent {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[];
  icon?: {
    asset: {
      url: string;
    };
  };
  pricing: string;
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[];
  author: string;
  publishedAt: Date;
  featured?: boolean;
  image?: {
    asset: {
      url: string;
    };
  };
  tags: string[];
}

export interface Testimonial {
  _id: string;
  clientName: string;
  role: string;
  content: string;
  rating: number;
  image?: {
    asset: {
      url: string;
    };
  };
  featured?: boolean;
}

// Payment Types
export interface PaymentInitResponse {
  authorization_url: string;
  access_code: string;
  reference: string;
}

export interface PaymentVerifyResponse {
  status: string;
  message: string;
  data: {
    status: string;
    reference: string;
    amount: number;
    currency: string;
    customer: {
      email: string;
    };
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
