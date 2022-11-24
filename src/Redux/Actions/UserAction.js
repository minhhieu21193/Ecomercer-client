import axios from "axios";
import { useSelector } from "react-redux";
import { ORDER_LIST_MY_RESET } from "../Slices/OrderSlice";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../Slices/UserSlice";
import { URL } from "../Url";

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(USER_LOGIN_REQUEST());

    const config = {
      headers: {
        Content_Type: "application/json",
      },
    };

    const { data } = await axios.post(
      `${URL}/api/users/login`,
      { email, password },
      config
    );
    dispatch(USER_LOGIN_SUCCESS(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      USER_LOGIN_FAIL(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(USER_LOGOUT());
  dispatch(USER_DETAILS_RESET());
  dispatch(ORDER_LIST_MY_RESET());
};

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(USER_REGISTER_REQUEST());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URL}/api/users`,
      { name, email, password },
      config
    );
    dispatch(USER_REGISTER_SUCCESS(data));
    dispatch(USER_LOGIN_SUCCESS(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      USER_REGISTER_FAIL(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// USER DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(USER_DETAILS_REQUEST());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${URL}/api/users/${id}`, config);
    dispatch(USER_DETAILS_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(USER_DETAILS_FAIL(message));
  }
};

// UPDATE PROFILE
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(USER_UPDATE_PROFILE_REQUEST());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${URL}/api/users/profile`, user, config);
    dispatch(USER_UPDATE_PROFILE_SUCCESS(data));
    dispatch(USER_LOGIN_SUCCESS(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch(USER_UPDATE_PROFILE_FAIL(message));
  }
};
