import axios from "axios";
import { useSelector } from "react-redux";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_CREATE_REVEIW_FAIL,
  PRODUCT_CREATE_REVEIW_REQUEST,
  PRODUCT_CREATE_REVEIW_RESET,
  PRODUCT_CREATE_REVEIW_SUCCESS,
} from "../Slices/ProductSlice";
import { URL } from "../Url";
import { logout } from "./UserAction";
// PRODUCT LIST
export const listProduct =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch(PRODUCT_LIST_REQUEST());
      const { data } = await axios.get(
        `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch(PRODUCT_LIST_SUCCESS(data));
    } catch (error) {
      dispatch(
        PRODUCT_LIST_FAIL(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

// SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(PRODUCT_DETAILS_REQUEST());
    const { data } = await axios.get(`${URL}/api/products/${id}`);
    dispatch(PRODUCT_DETAILS_SUCCESS(data));
  } catch (error) {
    dispatch(
      PRODUCT_DETAILS_FAIL(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// PRODUCT REVIEW CREATE
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch(PRODUCT_CREATE_REVEIW_REQUEST());

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `${URL}/api/products/${productId}/review`,
        review,
        config
      );
      dispatch(PRODUCT_CREATE_REVEIW_SUCCESS());
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(PRODUCT_CREATE_REVEIW_FAIL(message));
    }
  };
