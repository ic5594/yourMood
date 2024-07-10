import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCartItem(state, action) {

    },
    removeCartItem(state, action) {

    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;