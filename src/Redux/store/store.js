import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Slices/CartSlice";
import {
  OrderCreateReducer,
  OrderDetailsReducer,
  OrderPayReducer,
  OrderListMyReducer,
} from "../Slices/OrderSlice";
import {
  ProductListReducer,
  ProductDetailsReducer,
  ProductCreateReveiwReducer,
} from "../Slices/ProductSlice";
import {
  UserLoginReducer,
  UserRegisterReducer,
  UserDetailsReducer,
  userUpdateProfileReducer,
} from "../Slices/UserSlice";
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    productReviewCreate: ProductCreateReveiwReducer,
    cart: cartReducer,
    userLogin: UserLoginReducer,
    userRegister: UserRegisterReducer,
    userDetails: UserDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: OrderCreateReducer,
    orderDetails: OrderDetailsReducer,
    orderPay: OrderPayReducer,
    orderListMy: OrderListMyReducer,
  },
  preloadedState: initialState,
});
export default store;
