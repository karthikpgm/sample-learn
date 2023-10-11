import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import { useParams,Link } from 'react-router-dom';

function CertificationProgramDetail() {
    const { certificate_type_id } = useParams(); // Get the courseId from the URL parameter
    const [data, setData] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const UserClass   = localStorage.getItem('class');
    console.log(UserClass);
    let class_group = '';
    const fData = new FormData();
    fData.append('auth_token',localStorage.getItem('token'));
    fData.append('user_id',localStorage.getItem('user_id'));//localStorage.getItem('user_id'));
    fData.append('certificate_type_id',certificate_type_id);
    if (UserClass === '1' || UserClass === '2') {
      class_group = 0;
    } else if (UserClass === '3' || UserClass === '4') {
      class_group = 1;
    }
    else if (UserClass === '5' || UserClass === '6' || UserClass === '7') {
      class_group = 2;
    }
    else if (UserClass === '8' || UserClass === '9' || UserClass === '10') {
      class_group = 3;
    }
    fData.append('class_group',class_group);
    useEffect(() => {
      // Replace 'apiEndpoint' with the actual API endpoint that provides image URLs
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_user/fetch_theme_detail_by_id`;
      // const apiUrl = `http://localhost/Clapmaster/api_user/fetch_theme_detail_by_id`;
      fetch(apiUrl, {
        method: 'POST',
        body: fData
      })
      .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success === 'true' && data.status === 200) {
                setData(data.details); // Assuming 'details' contains the array you want to display
                setCourses(data.courses); // Assuming 'details' contains the array you want to display
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
            <div className="">
            {courses.map((item, index) => (
             <div key={index} className="timeline">
                {
                  <Link to={`/lessons/${item.class_id}`}>
                  
                    <span className="year">{item.class_title}</span>
                    <div className="inner-content">
                    <h3 className="title"></h3>
                    <p className="description">{item.is_unlocked}</p>
                    </div>
                </Link> 
                }
            </div>
            ))}

        </div>
        </div>
    </div>
    </div>
  );
}

export default CertificationProgramDetail;
