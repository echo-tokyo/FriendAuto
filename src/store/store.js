import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modals/modals.slice'

export const store = configureStore({ 
  reducer: { 
    modal: modalReducer,
  }, 
});
