import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import sessionReducer from '../features/session/sessionSlice';
import authorsReducer from '../features/authors/authorsSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    categories: categoriesReducer,
    session: sessionReducer,
    authors: authorsReducer
  },
});
