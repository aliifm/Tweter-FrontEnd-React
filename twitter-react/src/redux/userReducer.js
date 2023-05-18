import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        const { user, token } = action.payload;
        return {
          ...state,
          token: token,
          user: user,
        };
      },
    },
    logout(state, action) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout, usersListSidebar } = userSlice.actions;

export default userSlice.reducer;
