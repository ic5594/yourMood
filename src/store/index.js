import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import menuSlice from "./Menu";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, menu: menuSlice.reducer}
})

export default store