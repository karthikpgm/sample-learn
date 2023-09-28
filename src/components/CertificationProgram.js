import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
function CertificationProgram() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fData = new FormData();
    fData.append('auth_token',localStorage.getItem('token'));
    fData.append('user_id',localStorage.getItem('user_id'));
    fData.append('category_type',1);
    fData.append('platform',2);
    useEffect(() => {
      // Replace 'apiEndpoint' with the actual API endpoint that provides image URLs
      fetch('http://localhost/Clapmaster/api_user/fetch_certification_by_themes', {
        method: 'POST',
        body: fData
      })
      .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success === 'true' && data.status === 200) {
                setData(data.details); // Assuming 'details' contains the array you want to display
                setLoading(false);
              } else {
                console.error('Error: Failed to fetch data');
                setLoading(false);
              }
          
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
    <div className="container">
    <h4>Timeline Style : Demo-4</h4>
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline4">
            {data.map((item, index) => (
             <div key={index} className="timeline">
                <a href="#" className="timeline-content">
                    <span className="year">{item.title}</span>
                    <div className="inner-content">
                    <h3 className="title"></h3>
                    <p className="description">{item.is_unlocked}</p>
                    </div>
                </a>
            </div>
            ))}

        </div>
        </div>
    </div>
    </div>
  );
}

export default CertificationProgram;
