import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Theme()
{
  const [themes, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Replace 'apiEndpoint' with the actual API endpoint that provides image URLs
    const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_user/theme_views_count`;
    console.log(apiUrl);
    fetch(apiUrl, {
      method: 'POST'
    })
    .then((response) => response.json())
      .then((data) => {
          console.log(data.themes);
              setData(data.themes); // Assuming 'details' contains the array you want to display
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
        <div className="container py-5">
          <div className="row text-center mb-5">
            <div className="col-lg-7 mx-auto">
              <h1 className="display-4">Theme list</h1>
            </div>
          </div>
            <div className="row">
              <div class="col-lg-8 mx-auto">
                <ul class="list-group shadow">
                {themes.map((item, index) => (

                  // <Link to={`/course/${item.theme_id}`}>
                  <Link to={`/course`}>


                  <li key={index} class="list-group-item text-white">
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3"   style={{backgroundSize:'cover',
            backgroundImage: `url(https://learn.ulipsu.com/uploads/category_thumbnails/optimized/${item.thumbnail})`, // Set the background image dynamically
          }}>
                      <div class="media-body order-2 order-lg-1">
                        <h5 class="mt-0 font-weight-bold mb-2">{item.title}</h5>
                        <div class="d-flex align-items-center justify-content-between mt-1">
                          <h6 class="font-weight-bold my-2"></h6>
                          <ul class="list-inline small"> 
                            <li class="list-inline-item m-0"> <i class="fa fa-eye"></i>{item.courses} </li>
                            <li class="list-inline-item m-0"> <i class="fa fa-play"></i>{item.views}</li>
                            {/* <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li> */}
                          </ul>
                        </div>
                      </div>
                      </div>
                  </li>
                  </Link>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      );
    
}
export default Theme;
