import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function HomePageSlider() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const fData = new FormData();
    fData.append('auth_token',localStorage.getItem('token'));

    useEffect(() => {
      // Replace 'apiEndpoint' with the actual API endpoint that provides image URLs
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_student/home_fetch_details`;

      fetch(apiUrl, {
        method: 'POST',
        body: fData
      })
      .then((response) => response.json())
        .then((data) => {
            console.log(data.slider_classes);
          setImages(data.slider_classes); // Assuming the API response is an array of image URLs
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
  return (
    <div id="home-slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">      
      {images.map((item, index) => ( 
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}> 
            <img src={`https://ulipsu.s3.ap-south-1.amazonaws.com/uploads/classes/thumbnail/optimized/${item.class_thumbnail}`} className="d-block w-100" alt={`Image ${index}`} />
        </div>
        ))}
            
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
