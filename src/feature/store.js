import { configureStore } from '@reduxjs/toolkit'
import FavoritReducer from './Favorite/FavoriteSlice'
export const store = configureStore({
  reducer: {
    favorites:FavoritReducer
  },
})