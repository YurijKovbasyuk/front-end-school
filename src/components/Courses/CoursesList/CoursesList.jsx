import { useState, useEffect } from 'react';
import { getAllCoursesAPI } from 'API/API';
import { CoursesItem } from 'components';
import { CoursesListStyle } from './CoursesList.styled';

export const CoursesList = () => {
  const [coursesList, setCoursesList] = useState([]);


  useEffect(() => {
    getAllCoursesAPI()
      .then(data => {
        setCoursesList(data);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  if (coursesList) {
    return (
      <CoursesListStyle>
        {coursesList.map(({ id, title, description, previewImageLink, lessonsCount, rating, meta }) => {
          return (
            <CoursesItem
              key={id}
              id={id}
              title={title}
              description={description}
              previewImageLink={previewImageLink}
              lessonsCount={lessonsCount}
              rating={rating}
              meta={meta}
            />
          );
        }
        )}
      </CoursesListStyle>
    )
  }

};

