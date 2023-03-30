import React from "react";
import "./style.css";
import "./contact.css";

function Contact() {
  return (
    <div id="wrapper">
      <div id="contact-header">
        <h1>
          Whether you would like to work with me or just want to reach out, feel
          free to contact me.
        </h1>
      </div>
      <div id="contact-links">
        <a href="https://t.me/oluklef17" id="telegram" target="_blank">
          <i class="fab fa-telegram"></i>
        </a>
        <a href="https://wa.me/+2348072708424" id="whatsapp" target="_blank">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
