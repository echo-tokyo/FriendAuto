import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modal.slice'
import adminReducer from './admin/admin.slice';

export const store = configureStore({ 
  reducer: { 
    modal: modalReducer,
    admin: adminReducer
  }, 
});
