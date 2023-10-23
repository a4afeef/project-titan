import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface BookingConfirmationProps {
  name: string;
}
function BookingConfirmation(props: BookingConfirmationProps) {
  const navigate = useNavigate();
  function onHome() {
    navigate("/");
  }

  return (
    <div>
      <h5>Hi {props.name}! Your booking is confirmed!</h5>
      <Button type="primary" onClick={onHome}>
        Home
      </Button>
    </div>
  );
}

export default BookingConfirmation;
