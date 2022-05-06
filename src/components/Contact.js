import React from "react";
import Container from "@mui/material/Container";

function Contact() {
  return (
    <Container>
      <div className="cwXdff">
        <center>
          <h1 className="headingColor">Get In Touch</h1>
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is
            <br /> always open. Whether you have a question or just want to say
            hi, I’ll try my
            <br /> best to get back to you!
          </p>
          <a
            className="email-link"
            href="mailto:theebanrajuthayakumar10@gmail.com"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </center>
      </div>
    </Container>
  );
}

export default Contact;
