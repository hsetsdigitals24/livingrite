import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Booking } from '@/types';

interface BookingState {
  bookings: Booking[];
  currentBooking: Booking | null;
  isLoading: boolean;
  error: string | null;
  formData: {
    serviceType: string;
    scheduledDate: string;
    consultationType: string;
    notes: string;
  };
}

const initialState: BookingState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null,
  formData: {
    serviceType: '',
    scheduledDate: '',
    consultationType: 'Free',
    notes: '',
  },
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<Booking[]>) => {
      state.bookings = action.payload;
    },
    setCurrentBooking: (state, action: PayloadAction<Booking | null>) => {
      state.currentBooking = action.payload;
    },
    updateFormData: (state, action: PayloadAction<Partial<BookingState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBookings,
  setCurrentBooking,
  updateFormData,
  resetFormData,
  setLoading,
  setError,
} = bookingSlice.actions;
export default bookingSlice.reducer;
