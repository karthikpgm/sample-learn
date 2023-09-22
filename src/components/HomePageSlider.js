import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function HomePageSlider() {
  return (
    <div id="home-slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
                src="https://via.placeholder.com/500"
            className="d-block w-100"
            alt="Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
                src="https://via.placeholder.com/500"
            className="d-block w-100"
            alt="Image 2"
          />
        </div>
        <div className="carousel-item">
          <img
                src="https://via.placeholder.com/500"
            className="d-block w-100"
            alt="Image 3"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#home-slider"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#home-slider"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default HomePageSlider;
