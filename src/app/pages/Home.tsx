import BookingButton from "../components/HomeComponents/BookingButton";
import Paragraph from "../components/HomeComponents/Paragraph";
import React from "react";
import ContactUs from "../components/HomeComponents/ContactUs";
import { Space } from "antd";

const Home = () => {
  return (
    <div>
      <Space direction="vertical">
        <Paragraph />
        <BookingButton />
        <ContactUs />
      </Space>
    </div>
  );
};

export default Home;
