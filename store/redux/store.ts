import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import favoritesReducer from './favorites';

export const store = configureStore({
  reducer: { favoriteMeals: favoritesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
