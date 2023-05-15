import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  followedUsers: [], // Add a new field to store the followed users
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        const { user, token } = action.payload;
        state.token = token;
        state.user = user;
      },
    },
    logout(state, action) {
      state.token = null;
      state.user = null;
      state.followedUsers = []; // Reset the followed users when logging out
    },
    updateFollowedUsers(state, action) {
      state.followedUsers = action.payload; // Update the followed users with the new data
    },
  },
});

export const { login, logout, updateFollowedUsers } = userSlice.actions;

export default userSlice.reducer;
