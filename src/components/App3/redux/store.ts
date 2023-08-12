import { configureStore } from '@reduxjs/toolkit';
import multiStepFormReducer from './multiStepFormSlice';

export const store = configureStore({
  reducer: {
    multiStepForm: multiStepFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
