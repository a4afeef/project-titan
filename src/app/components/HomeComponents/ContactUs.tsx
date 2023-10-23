import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("contact");
  }
  return (
    <div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
  );
}

export default ContactUs;
