import React, { useState } from "react";
import BookingForm from "../components/BookingComponents/BookingForm";
import Heading from "../components/BookingComponents/Heading";
import BookingConfirmation from "../components/BookingComponents/BookingConfirmation";

function Booking() {
  const [name, setName] = useState("");
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const ParentCallBack = (bookingName: string) => {
    setName(bookingName);
    setAlreadyBooked(true);
  };

  return (
    <div>
      <Heading />
      {alreadyBooked ? (
        <BookingConfirmation name={name} />
      ) : (
        <BookingForm onCallBack={ParentCallBack} />
      )}
    </div>
  );
}

export default Booking;
