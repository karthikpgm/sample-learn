import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Fetch lesson data based on the courseId and update the lessons state
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api_student/browse_classes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data.classes); // Assuming your API returns an array of lessons
      console.log(courses);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="text-center">Course List</h2>
    <ul className="list-group">
    {courses.map((course, index) => (
       <Link to={`/lessons/${course.class_id}`}>

        <li key={index} className="list-group-item">
          <h3>{course.class_title}</h3>
          
        
        </li>
        </Link>
      ))}

    </ul>
  </div>

  );
}

export default CourseList;
