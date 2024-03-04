import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modal.slice'

export const store = configureStore({ 
  reducer: { 
    modal: modalReducer,
  }, 
});
