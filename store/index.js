import { configureStore } from '@reduxjs/toolkit';
import { phenomReducer } from './phenomSlice';

export const store = configureStore({ reducer: { phenom: phenomReducer } });