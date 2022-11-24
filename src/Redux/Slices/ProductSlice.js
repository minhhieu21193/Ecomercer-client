import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const ProductListSlice = createSlice({
  name: "productList",
  initialState: { product: [] },
  reducers: {
    PRODUCT_LIST_REQUEST: (state, actions) => ({
      ...state,
      loading: true,
      product: [],
    }),
    PRODUCT_LIST_SUCCESS: (state, actions) => {
      return {
        ...state,
        loading: false,
        page: actions.payload.page,
        pages: actions.payload.pages,
        products: actions.payload.products,
      };
    },
    PRODUCT_LIST_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
  },
});
export const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState: { product: { reviews: [] } },
  reducers: {
    PRODUCT_DETAILS_REQUEST: (state, actions) => {
      return { ...state, loading: true };
    },
    PRODUCT_DETAILS_SUCCESS: (state, actions) => {
      return { ...state, loading: false, product: actions.payload };
    },
    PRODUCT_DETAILS_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
  },
});
export const ProductCreateReveiwSlice = createSlice({
  name: "productCreateReveiw",
  initialState: {},
  reducers: {
    PRODUCT_CREATE_REVEIW_REQUEST: (state, actions) => {
      return { ...state, loading: true };
    },
    PRODUCT_CREATE_REVEIW_SUCCESS: (state, actions) => {
      return { ...state, loading: false, success: true };
    },
    PRODUCT_CREATE_REVEIW_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
    PRODUCT_CREATE_REVEIW_RESET: (state, actions) => {
      return {};
    },
  },
});
export const { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } =
  ProductListSlice.actions;
export const {
  PRODUCT_CREATE_REVEIW_FAIL,
  PRODUCT_CREATE_REVEIW_REQUEST,
  PRODUCT_CREATE_REVEIW_RESET,
  PRODUCT_CREATE_REVEIW_SUCCESS,
} = ProductCreateReveiwSlice.actions;
export const {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} = ProductDetailsSlice.actions;
export const ProductCreateReveiwReducer = ProductCreateReveiwSlice.reducer;
export const ProductDetailsReducer = ProductDetailsSlice.reducer;
export const ProductListReducer = ProductListSlice.reducer;
export default ProductListSlice;
