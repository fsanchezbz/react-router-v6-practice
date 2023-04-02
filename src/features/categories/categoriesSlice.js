import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../../app/data';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: CATEGORIES,
  },
  reducers: {}
});

export const selectCategories = (state) => state.categories.categories;
export default categoriesSlice.reducer;
