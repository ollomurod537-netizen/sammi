import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/slice/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
