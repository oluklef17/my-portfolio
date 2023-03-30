import React from "react";
import { projects } from "./project-data";
import "./projects.css";

function ProjectSlides({ currentSlide, setCurrentSlide }) {
  const handleNextSlide = () => {
    if (currentSlide === projects.length - 1) setCurrentSlide(0);
    else {
      let cs = currentSlide + 1;
      setCurrentSlide(cs);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(projects.length - 1);
    else {
      let cs = currentSlide - 1;
      setCurrentSlide(cs);
    }
  };

  return (
    <div id="wrapper">
      <button onClick={handlePrevSlide} id="previous">
        <i className="fas fa-step-backward"></i>
      </button>
      <div id="project">
        <h1 id="desc-title">{projects[currentSlide].title}</h1>
        <img
          alt="Project demo image"
          id="project-img"
          src={projects[currentSlide].image}
        />
        <p id="desc-body">{projects[currentSlide].description}</p>
        <p id="desc-body-p2">
          <i>{projects[currentSlide].technicals}</i>
        </p>

        <a href={projects[currentSlide].link} id="project-link" target="_blank">
          View project on <i className="fab fa-github"></i> Github
        </a>
      </div>
      <button onClick={handleNextSlide} id="next">
        <i className="fas fa-step-forward"></i>
      </button>
    </div>
  );
}

export default ProjectSlides;
