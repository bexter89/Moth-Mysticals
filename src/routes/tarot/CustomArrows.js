import React from "react";
import './CustomArrows.css'

const CustomLeftArrow = ({ onClick }) => {
  return <div><i onClick={() => onClick()} className="bi bi-chevron-left" style={{fontFamily: 'sans-serif',fontSize: 50, color: 'white'}}></i></div>;
};
const CustomRightArrow = ({ onClick }) => {
  return <div><i className="bi bi-chevron-right" style={{fontFamily: 'sans-serif',fontSize: 50, color: 'white'}} onClick={() => onClick()}></i></div>;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};