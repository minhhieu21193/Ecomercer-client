import axios from "axios";
import { logout } from "./UserAction";
import { URL } from "../Url";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../Slices/OrderSlice";
import { CART_CLEAR_ITEMS } from "../Slices/CartSlice";
import { useSelector } from "react-redux";

// CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(ORDER_CREATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${URL}/api/orders`, order, config);
    dispatch(ORDER_CREATE_SUCCESS(data));
    dispatch(CART_CLEAR_ITEMS(data));

    localStorage.removeItem("cartItems");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(ORDER_CREATE_FAIL(message));
  }
};

// ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(ORDER_DETAILS_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/orders/${id}`, config);
    dispatch(ORDER_DETAILS_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(ORDER_DETAILS_FAIL(message));
  }
};

// ORDER PAY
export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(ORDER_PAY_REQUEST());

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${URL}/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch(ORDER_PAY_SUCCESS(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(ORDER_PAY_FAIL(message));
    }
  };

// USER ORDERS
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(ORDER_LIST_MY_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/orders/`, config);
    dispatch(ORDER_LIST_MY_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(ORDER_LIST_MY_FAIL(message));
  }
};
