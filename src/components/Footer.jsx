import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
function Footer() {
  return (
    <>
      <div className="px-2 m-0">
        <div className="footer desc-content mt-5">
          <div className="footer-header row-cols-4 d-flex pt-5 px-3 mx-0 row g-5">
            <div className="mx-0 px-0 col-lg-4 col-xl-3 d-flex flex-column">
              <p className="text-white text-small ps-lg-2">
                “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược..
                luôn cùng YODY tiến bước”
              </p>
              <p className="text-white  text-small  ps-lg-2">
                ĐĂNG KÝ NHẬN THÔNG TIN
              </p>
              <form action="" className="row form-footer-bg ps-lg-3">
                <input
                  type="text"
                  className="col-8 text-small p-3 fw-semibold text-border"
                  placeholder="Nhập email đăng ký của bạn"
                />
                <button className="color-light-orange text-small  col-4 btn-border-transparent">
                  Đăng ký
                </button>
              </form>
              <div className="footer-icon-social my-3 d-flex">
                <div className="icon-round">
                  <FacebookIcon />
                </div>
                <div className="icon-round">
                  <YouTubeIcon />
                </div>
                <div className="icon-round">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="mx-0 px-0 col-lg-2 col-xl-3 d-flex justify-content-center">
              <ul className="d-flex flex-column">
                <li className="text-white  text-small  mb-lg-3">Về YODY</li>
                <li className="text-white">
                  <Link to="/" className="footer-link my-lg-1">
                    Giới thiệu
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/" className="footer-link my-lg-1">
                    Liên hệ
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/" className="footer-link my-lg-1">
                    Tuyển dụng
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/" className="footer-link my-lg-1">
                    Tin tức
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/" className="footer-link my-lg-1">
                    Hệ thống cửa hàng
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3 mx-0 px-0 d-flex flex-column">
              <p className="text-uppercase text-white">hỗ trợ khách hàng</p>
              <a href="#" className="footer-link my-lg-1">
                Hướng dẫn chọn size
              </a>
              <a href="#" className="footer-link my-lg-1">
                Chính sách khách hàng thân thiết
              </a>
              <a href="#" className="footer-link my-lg-1">
                Chính sách đổi / trả
              </a>
              <a href="#" className="footer-link my-lg-1">
                Chính sách bảo mật
              </a>
              <a href="#" className="footer-link my-lg-1">
                Thanh toán, giao nhận
              </a>
              <a href="#" className="footer-link my-lg-1">
                Thanh toán Đồng phục
              </a>
            </div>
            <div className="mx-0 px-0 col-lg-4 col-xl-3">
              <div className="d-flex">
                <div className="icon-round">
                  <LocationOnIcon />
                </div>
                <div className="text-white text-small my-auto">
                  <p>
                    Công ty cổ phần Thời trang YODY
                    <br />
                    Mã số thuế: 0801206940
                    <br />
                    Địa chỉ: Đường An Định - Phường Việt Hoa - Thành phố Hải
                    Dương - Hải Dương
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-round">
                  <StoreIcon />
                </div>
                <div className="text-white text-small my-auto">
                  <a href="#" className="footer-link">
                    Tìm cửa hàng gần bạn nhất
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-round">
                  <LocalPhoneIcon />
                </div>
                <div className="text-white text-small my-auto d-flex flex-column">
                  <a href=" #" className="footer-link">
                    Liên hệ đặt hàng: 024 9996 6868
                  </a>
                  <a href="#" className="footer-link">
                    Thắc mắc đơn hàng: 024 9996 6868
                  </a>
                  <a href="#" className="footer-link">
                    Góp ý khiếu nại: 1800 2086
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-round">
                  <MailIcon />
                </div>
                <div className="text-white text-small my-auto d-flex flex-column">
                  <a className="footer-link" href="#">
                    Email: chamsockhachhang@yody.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-hr mt-3"></div>
          <div className="container d-flex justify-content-center mt-3">
            <p className="text-white text-small fw-semibolder">
              @ Bản quyền thuộc về <span className="text-warning">Yody.vn</span>
              All right reversed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
