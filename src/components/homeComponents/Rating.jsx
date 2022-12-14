import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
function Rating({ value, text }) {
  return (
    <div className="rating">
      {value >= 1 ? (
        <StarIcon />
      ) : value >= 0.5 ? (
        <StarHalfIcon />
      ) : (
        <StarBorderIcon />
      )}
      {value >= 2 ? (
        <StarIcon />
      ) : value >= 1.5 ? (
        <StarHalfIcon />
      ) : (
        <StarBorderIcon />
      )}
      {value >= 3 ? (
        <StarIcon />
      ) : value >= 2.5 ? (
        <StarHalfIcon />
      ) : (
        <StarBorderIcon />
      )}
      {value >= 4 ? (
        <StarIcon />
      ) : value >= 3.5 ? (
        <StarHalfIcon />
      ) : (
        <StarBorderIcon />
      )}
      {value >= 5 ? (
        <StarIcon />
      ) : value >= 4.5 ? (
        <StarHalfIcon />
      ) : (
        <StarBorderIcon />
      )}
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
