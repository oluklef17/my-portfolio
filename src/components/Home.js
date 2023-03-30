import React from "react";
import "./style.css";
import bg from "./bg.jpg";

function Home() {
  return (
    <div
      className="container"
      style={{
        background: `url(${bg}), rgba(255, 255, 255, 0.9)`,
        backgroundSize: "cover",
      }}
    >
      <div class="hero-heading">
        <h1 class="name-header">OLUYEMI SODIPO</h1>
        <hr class="divider" />
        <h3 class="role-header">ALGO TRADING EXPERT * FULL STACK DEVELOPER</h3>
      </div>

      <div class="sm-links">
        <a class="sm-btn" href="https://github.com/oluklef17" target="_blank">
          <i class="fab fa-github"></i>
          Github
        </a>
        <a
          class="sm-btn"
          href="https://www.linkedin.com/in/oluyemi-sodipo-3040281a6/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a
          class="sm-btn"
          href="https://twitter.com/_yemisodipo"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Home;
