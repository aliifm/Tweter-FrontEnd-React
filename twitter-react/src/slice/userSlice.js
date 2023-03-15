import { createSlice, current } from "@reduxjs/toolkit";
import { format } from "date-fns";

const userModel = createSlice({
  name: "userSlice",
  initialState: [],
  reducers: {
    crearLista: {
      reducer: (state, action) => {
        return [
          ...state,
          {
            ...action.payload,
            productos: [],
          },
        ];
      },
      prepare: (name) => {},
    },
    addUser(state, action) {
      //   const { listaId } = action.payload;
      //   const listaActualizada = state.filter((lista) => lista.id !== listaId);
      //   return (state = listaActualizada);
      // Esta función es del ejercicio 19, era solo para ver de ejemplo
    },
  },
});

export const { addUser } = userModel.actions;

export default userModel.reducer;
