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
      <Banner />
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
            <div className=" col-5 px-0 mx-0">
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
            <div className="me-auto col-5 px-0 mx-0 d-flex justify-content-end">
              <a
                className="header-find-store px-0 col-lg-5 col-xl-4 d-flex justify-content-end align-items-center"
                href="#"
              >
                Tìm
                <span className="text-primary mx-1">205</span>cửa hàng
              </a>
              <a
                className="header-hotline px-0 col-lg-3 col-xl-2 d-flex align-items-center mx-2"
                href="tel:18002086"
              >
                <i className="fa-solid fa-phone"></i>
                <span className="text-primary">1800 2086</span>
              </a>
            </div>
          </div>
          <div className="d-lg-flex d-none row col-lg-12 mb-lg-0">
            <ul className="header-galery col-lg-8 col-xl-6 d-flex justify-content-evenly align-items-end ps-lg-0 mb-lg-0">
              <li className="text-danger">SALE</li>
              <li>
                <a className="header-female" href="#">
                  {" "}
                  NỮ
                </a>
              </li>
              <li>
                <a className="header-male" href="#">
                  NAM
                </a>
              </li>
              <li>
                <a className="header-children" href="#">
                  TRẺ EM
                </a>
              </li>
              <li>
                <a className="header-polo" href="#">
                  POLO DOLY
                </a>
              </li>
              <li>
                <a className="header-collection-clothes" href="#">
                  BỘ SƯU TẬP
                </a>
              </li>
              <li>
                <a className="header-new" href="#">
                  TIN TỨC
                </a>
              </li>
              <li>
                <a className="header-uniform" href="#">
                  ĐỒNG PHỤC
                </a>
              </li>
            </ul>
            <div className="d-flex mb-lg-0 align-items-end justify-content-end ms-auto flex-nowrap px-0 col-lg-4 Login-Register">
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
                <>
                  <Link to="/register">Đăng kí</Link>
                  <Link to="/login">Đăng nhập</Link>
                </>
              )}
              <Link
                to="/cart"
                className="btn d-flex align-items-end btn-bag mx-lg-4 p-lg-0"
              >
                Giỏ hàng
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
const Banner = styled.div`
  width: 100%;
  height: 48px;
  background: url(//bizweb.sapocdn.net/100/438/408/themes/882066/assets/bannertop.jpg?1667298261334)
    center center no-repeat;
`;
// const Logo = styled.div`
//   width: 80px;
//   height: 40px;
// `;
export default Header;
