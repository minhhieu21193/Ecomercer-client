import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-6 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <PhoneIcon />
            </div>
            <h5>Call Us 24/7</h5>
            <p>+88888888</p>
          </div>
        </div>
        <div className="col-12 col-md-6 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <LocationOnIcon />
            </div>
            <h5>Adress</h5>
            <p>Thanh Xuân, Hà Nội </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
