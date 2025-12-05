import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  User,
  Booking,
  CareUpdate,
  Document,
  Invoice,
  Message,
  ApiResponse,
} from '@/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: [
    'User',
    'Booking',
    'CareUpdate',
    'Document',
    'Invoice',
    'Message',
    'Lead',
    'Analytics',
  ],
  endpoints: (builder) => ({
    // Auth endpoints
    login: builder.mutation<ApiResponse<User>, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<ApiResponse<User>, any>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),

    // Booking endpoints
    getBookings: builder.query<ApiResponse<Booking[]>, void>({
      query: () => '/bookings',
      providesTags: ['Booking'],
    }),
    createBooking: builder.mutation<ApiResponse<Booking>, Partial<Booking>>({
      query: (booking) => ({
        url: '/bookings',
        method: 'POST',
        body: booking,
      }),
      invalidatesTags: ['Booking'],
    }),
    updateBooking: builder.mutation<
      ApiResponse<Booking>,
      { id: string; data: Partial<Booking> }
    >({
      query: ({ id, data }) => ({
        url: `/bookings/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Booking'],
    }),

    // Care Updates endpoints
    getCareUpdates: builder.query<ApiResponse<CareUpdate[]>, string>({
      query: (clientId) => `/portal/care-updates?clientId=${clientId}`,
      providesTags: ['CareUpdate'],
    }),
    createCareUpdate: builder.mutation<ApiResponse<CareUpdate>, Partial<CareUpdate>>({
      query: (update) => ({
        url: '/portal/care-updates',
        method: 'POST',
        body: update,
      }),
      invalidatesTags: ['CareUpdate'],
    }),

    // Documents endpoints
    getDocuments: builder.query<ApiResponse<Document[]>, string>({
      query: (clientId) => `/portal/documents?clientId=${clientId}`,
      providesTags: ['Document'],
    }),
    uploadDocument: builder.mutation<ApiResponse<Document>, FormData>({
      query: (formData) => ({
        url: '/portal/documents/upload',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Document'],
    }),

    // Messages endpoints
    getMessages: builder.query<ApiResponse<Message[]>, void>({
      query: () => '/portal/messages',
      providesTags: ['Message'],
    }),
    sendMessage: builder.mutation<ApiResponse<Message>, Partial<Message>>({
      query: (message) => ({
        url: '/portal/messages',
        method: 'POST',
        body: message,
      }),
      invalidatesTags: ['Message'],
    }),

    // Invoices endpoints
    getInvoices: builder.query<ApiResponse<Invoice[]>, string>({
      query: (clientId) => `/portal/invoices?clientId=${clientId}`,
      providesTags: ['Invoice'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useGetCareUpdatesQuery,
  useCreateCareUpdateMutation,
  useGetDocumentsQuery,
  useUploadDocumentMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
  useGetInvoicesQuery,
} = apiSlice;
