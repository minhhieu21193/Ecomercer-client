import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const UserLoginSlice = createSlice({
  name: "userLogin",
  initialState: {},
  reducers: {
    USER_LOGIN_REQUEST: (state, actions) => {
      return { ...state, loading: true };
    },
    USER_LOGIN_SUCCESS: (state, actions) => {
      return { ...state, loading: false, userInfo: actions.payload };
    },
    USER_LOGIN_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
    USER_LOGOUT: () => {
      return {};
    },
  },
});
const UserRegisterSlice = createSlice({
  name: "userRegister",
  initialState: {},
  reducers: {
    USER_REGISTER_REQUEST: (state, actions) => {
      return { ...state, loading: true };
    },
    USER_REGISTER_SUCCESS: (state, actions) => {
      return { ...state, loading: false, userInfo: actions.payload };
    },
    USER_REGISTER_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
  },
});
const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState: { user: {} },
  reducers: {
    USER_DETAILS_REQUEST: (state, actions) => {
      return { ...state, loading: true };
    },
    USER_DETAILS_SUCCESS: (state, actions) => {
      return { ...state, loading: false, user: actions.payload };
    },
    USER_DETAILS_FAIL: (state, actions) => {
      return { ...state, loading: false, error: actions.payload };
    },
    USER_DETAILS_RESET: (state, actions) => {
      return { ...state, user: {} };
    },
  },
});
const UserUpdateProfileSlice = createSlice({
  name: "userUpdate",
  initialState: {},
  reducers: {
    USER_UPDATE_PROFILE_REQUEST: (state, actions) => {
      return { ...state, loadingUpdate: true };
    },
    USER_UPDATE_PROFILE_SUCCESS: (state, actions) => {
      return { ...state, loadingUpdate: false, userInfo: actions.payload };
    },
    USER_UPDATE_PROFILE_FAIL: (state, actions) => {
      return { ...state, loadingUpdate: false, error: actions.payload };
    },
  },
});
export const {
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} = UserUpdateProfileSlice.actions;
export const {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
} = UserDetailsSlice.actions;
export const {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} = UserLoginSlice.actions;
export const {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} = UserRegisterSlice.actions;
export const userUpdateProfileReducer = UserUpdateProfileSlice.reducer;
export const UserLoginReducer = UserLoginSlice.reducer;
export const UserRegisterReducer = UserRegisterSlice.reducer;
export const UserDetailsReducer = UserDetailsSlice.reducer;
export default UserLoginSlice;
