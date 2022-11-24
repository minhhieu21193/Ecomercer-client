import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initState = { cartItems: [], shippingAddress: {}, paymentMethod: {} };
const CartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    CART_ADD_ITEMS: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    CART_REMOVE_ITEM: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
    CART_SAVE_SHIPPING_ADDRESS: (state, action) => {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    },
    CART_SAVE_PAYMENT_METHOD: (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    },
    CART_CLEAR_ITEMS: (state, action) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});
export const cartState = (state) => state.cartItems;
export const {
  CART_ADD_ITEMS,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
export default CartSlice;
