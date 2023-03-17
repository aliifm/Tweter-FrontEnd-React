import { createSlice } from "@reduxjs/toolkit";
// import { format } from "date-fns";

const initialState = {
  token: null,
  user: null,
};
// Agregar la data del store en el localStorage (usar libreria que paso marcus)
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
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
