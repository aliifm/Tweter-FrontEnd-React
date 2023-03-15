import { createSlice, current } from "@reduxjs/toolkit";
import { format } from "date-fns";

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
    logout(state, action) {},
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

export const { login } = userSlice.actions;

export default userSlice.reducer;
