import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BookingButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("booking");
  }

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Book Now!
      </Button>
    </div>
  );
};

export default BookingButton;
