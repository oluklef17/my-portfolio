import React from "react";
import "./style.css";
import "./about.css";
import dp from "./test-dp.jpg";

function About() {
  return (
    <div class="container">
      <h1 id="about-me">ABOUT ME</h1>
      <div class="img-frame">
        <img class="profile-pic" src={`${dp}`} />
      </div>

      <p class="description">
        Hi, I'm Yemi. I'm a professional developer with a focus on web and
        quantitative development. I specialize in creating trading bots and
        tools, and I have experience in MQL4, MQL5, PineScript, HTML5, CSS3,
        JavaScript, React, Flask, Django, Python, C++ and SQL. I'm passionate
        about using technology to solve complex problems and creating elegant
        solutions that provide real value to users. If you're looking for a
        skilled developer to bring your project to life, I'd love to chat and
        see how I can help.
      </p>
    </div>
  );
}

export default About;
