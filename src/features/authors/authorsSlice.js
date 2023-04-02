import { createSlice } from '@reduxjs/toolkit';
import { AUTHORS } from '../../app/data';

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    authors: AUTHORS,
  },
  reducers: {}
});

export const selectAuthors = (state) => state.authors.authors;
export default authorsSlice.reducer;
