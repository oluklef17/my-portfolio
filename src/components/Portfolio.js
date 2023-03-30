import React from "react";
import { useState } from "react";
import ProjectSlides from "./ProjectSlides";

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <ProjectSlides
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default Portfolio;
