import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
  ids: string[];
};

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
