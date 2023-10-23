import React from "react";

interface ContactUsProps{
    title : string
}

const ContactUs = (props: ContactUsProps) => {
    return(
        <div>
            <h4>Contact {props.title}</h4>
        </div>
    )
}

export default ContactUs;