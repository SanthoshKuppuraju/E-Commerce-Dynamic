import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducer: {
    add(state, action) {
      state.push(action.payLoad);
    },
  },
});
