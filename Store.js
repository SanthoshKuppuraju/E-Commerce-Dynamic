import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./CartSlice";
const store = configureStore({
  reducers: {
    cart: cartReducers,
  },
});
