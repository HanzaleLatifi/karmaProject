import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const favoriteSlice = createSlice({
  name: "favorite", //state name
  initialState: { favorites: [] },
  reducers: {
    favoriteHandler: (state, action) => {
      const isFounded = state.favorites.findIndex((p) => action.payload.id === p.id);
      if (isFounded >= 0) {
        const filteredTodo = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
        state.favorites = filteredTodo;
        toast.error('remove from favorite')
      } else {
        state.favorites.push(action.payload);
        toast.success('add to favotite')
      }
    },
  },
});

export const { favoriteHandler } = favoriteSlice.actions;
export default favoriteSlice.reducer;
