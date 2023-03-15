import { createSlice, current } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  token: null,
  user: {
    id: null,
    username: null,
    firstname: null,
    lastname: null,
    avatar: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUser: {
      reducer: (state, action) => {
        const { id, username, firstname, lastname, avatar, token } = action.payload;
        state.token = token;
        state.user = { id, username, firstname, lastname, avatar };
      },
    },
    // addToken(state, action) {
    //   state.token = action.payload;
    // },
    addUser(state, action) {
      //   const { listaId } = action.payload;
      //   const listaActualizada = state.filter((lista) => lista.id !== listaId);
      //   return (state = listaActualizada);
      // Esta función es del ejercicio 19, era solo para ver de ejemplo
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
