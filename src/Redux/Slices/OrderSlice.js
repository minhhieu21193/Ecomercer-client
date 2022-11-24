import { createSlice } from "@reduxjs/toolkit";

// CREATE ORDER
const OrderCreateSlice = createSlice({
  name: "orderCreate",
  initialState: {},
  reducers: {
    ORDER_CREATE_REQUEST: () => {
      return { loading: true };
    },
    ORDER_CREATE_SUCCESS: (state, action) => {
      return { loading: false, success: true, order: action.payload };
    },
    ORDER_CREATE_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    ORDER_CREATE_RESET: () => {
      return {};
    },
  },
});
export const OrderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true, orderItems: [], shippingAddress: {} },
  reducers: {
    ORDER_DETAILS_REQUEST: (state, action) => {
      return { ...state, loading: true };
    },
    ORDER_DETAILS_SUCCESS: (state, action) => {
      return { loading: false, order: action.payload };
    },
    ORDER_DETAILS_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    ORDER_CREATE_RESET: (state, action) => {
      return {};
    },
  },
});
export const OrderPaySlice = createSlice({
  name: "orderPay",
  initialState: {},
  reducers: {
    ORDER_PAY_REQUEST: (state, action) => {
      return { loading: true };
    },
    ORDER_PAY_SUCCESS: (state, action) => {
      return { loading: false, success: true };
    },
    ORDER_PAY_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    ORDER_PAY_RESET: (state, action) => {
      return {};
    },
  },
});
export const OrderListMySlice = createSlice({
  name: "ordeListMy",
  initialState: { orders: [] },
  reducers: {
    ORDER_LIST_MY_REQUEST: (state, action) => {
      return { loading: true };
    },
    ORDER_LIST_MY_SUCCESS: (state, action) => {
      return { loading: false, orders: action.payload };
    },
    ORDER_LIST_MY_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    ORDER_LIST_MY_RESET: (state, action) => {
      return { orders: [] };
    },
  },
});

export const {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
} = OrderCreateSlice.actions;
export const {
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} = OrderDetailsSlice.actions;
export const {
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} = OrderPaySlice.actions;
export const {
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
} = OrderListMySlice.actions;
export const OrderCreateReducer = OrderCreateSlice.reducer;
export const OrderDetailsReducer = OrderDetailsSlice.reducer;
export const OrderListMyReducer = OrderListMySlice.reducer;
export const OrderPayReducer = OrderPaySlice.reducer;
export default OrderCreateSlice;
