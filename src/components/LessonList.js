import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LessonList() {
  const { courseId } = useParams(); // Get the courseId from the URL parameter
  const [lessons, setLessons] = useState([]);
 console.log(courseId);
  useEffect(() => {
    // Fetch lesson data based on the courseId and update the lessons state
    fetchLessonData(courseId);
  }, [courseId]);

  const fetchLessonData = async (courseId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api_student/class_details_topics?auth_token=${localStorage.getItem('token')}&class_id=${courseId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLessons(data.all_lessons); // Assuming your API returns an array of lessons
      console.log(lessons);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="text-center">Lesson List</h2>
    <ul className="list-group">
      {lessons.map((lesson, index) => (
        <li key={index} className="list-group-item">
          <h3>{lesson.lesson_title}</h3>
          {lesson.lesson_type === 'video_file' && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={lesson.lesson_src}
                title={lesson.lesson_title}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          )}
          {(lesson.lesson_type === 'pdf_file' || lesson.lesson_type === 'project_pdf' ) && (
            <div className="embed-responsive embed-responsive-4by3">
              <embed className="embed-responsive-item" src={lesson.lesson_src} type="application/pdf" />
            </div>
          )}
          {/* Add more types (e.g., quizzes, text lessons) as needed */}
        </li>
      ))}
    </ul>
  </div>

  );
}

export default LessonList;
