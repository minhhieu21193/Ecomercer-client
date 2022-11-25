import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/UserAction";

function Header() {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <nav className="navbar navbar-light row mx-0 p-2 bg-light">
        <div className="px-0">
          <div className="mx-0 row col-12 d-flex align-items-center">
            <div className="row col-2">
              <Link className="navbar-brand" to="/">
                <img
                  className="img-fluid"
                  src="//bizweb.sapocdn.net/100/438/408/themes/863105/assets/logo.svg?1661227956031"
                />
              </Link>
            </div>
            <div className=" col-4 col-md-6 px-0 mx-0">
              <div>
                <form
                  className="d-flex my-lg-0 rounded-pill bg-transparent form-search-larger me-lg-2"
                  onSubmit={submitHandler}
                >
                  <input
                    className="bg-transparent form-text-search ps-lg-4"
                    type="search"
                    placeholder="Tìm sản phẩm"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button
                    className="btn btn-warning form-btn-search"
                    type="submit"
                  >
                    <SearchIcon />
                  </button>
                </form>
              </div>
            </div>
            <div className="d-flex mb-lg-0 align-items-center justify-content-end  flex-nowrap px-0 col-6 col-md-4 Login-Register pe-md-4 pe-2">
              {userInfo ? (
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, {userInfo.name}
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Cá nhân
                    </Link>

                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Thoát
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <Link className="px-0 mx-1" to="/register">
                    Đăng kí
                  </Link>
                  <Link className="px-0 mx-1" to="/login">
                    Đăng nhập
                  </Link>
                </div>
              )}
              <Link
                to="/cart"
                className="btn d-flex align-items-end btn-bag mx-0 px-0 mx-lg-4 p-lg-0"
              >
                <span className="d-none d-lg-block">Giỏ hàng</span>
                <ShoppingCartIcon />
                <span className="badge-custom">{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
