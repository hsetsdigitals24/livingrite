import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CareUpdate, Message } from '@/types';

interface PortalState {
  careUpdates: CareUpdate[];
  messages: Message[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  notificationSettings: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    urgentOnly: boolean;
  };
}

const initialState: PortalState = {
  careUpdates: [],
  messages: [],
  unreadCount: 0,
  isLoading: false,
  error: null,
  notificationSettings: {
    emailNotifications: true,
    smsNotifications: true,
    urgentOnly: false,
  },
};

export const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    setCareUpdates: (state, action: PayloadAction<CareUpdate[]>) => {
      state.careUpdates = action.payload;
    },
    addCareUpdate: (state, action: PayloadAction<CareUpdate>) => {
      state.careUpdates.unshift(action.payload);
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.unshift(action.payload);
      if (!action.payload.isRead) {
        state.unreadCount += 1;
      }
    },
    markMessageAsRead: (state, action: PayloadAction<string>) => {
      const message = state.messages.find((m) => m.id === action.payload);
      if (message && !message.isRead) {
        message.isRead = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
    },
    setUnreadCount: (state, action: PayloadAction<number>) => {
      state.unreadCount = action.payload;
    },
    updateNotificationSettings: (
      state,
      action: PayloadAction<Partial<PortalState['notificationSettings']>>
    ) => {
      state.notificationSettings = {
        ...state.notificationSettings,
        ...action.payload,
      };
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
  setCareUpdates,
  addCareUpdate,
  setMessages,
  addMessage,
  markMessageAsRead,
  setUnreadCount,
  updateNotificationSettings,
  setLoading,
  setError,
} = portalSlice.actions;
export default portalSlice.reducer;
