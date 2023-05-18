import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
  name: "follow",
  initialState: null,
  reducers: {
    usersListSidebar(state, action) {
      return action.payload;
    },
    usersListSidebarFollow(state, action) {
      state.push(action.payload);
    },
  },
});

export const { usersListSidebar, usersListSidebarFollow } = followSlice.actions;

export default followSlice.reducer;
