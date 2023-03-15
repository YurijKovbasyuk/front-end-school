import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CoursesList = ({ coursesList }) => {
  const location = useLocation();



  return (
    <ul>
      {coursesList.map(course => {
        const { id, title, description, previewImageLink, lessonsCount, rating, meta


        } = course;
        return (
          <li key={id}>
            <Link
              to={`/courses/${id}`}
              state={{ from: location }}
            >
              <h2>Title: {title}</h2>

            </Link>
            <img src={previewImageLink + '/cover.webp'} alt={description}></img>
            <p>Description: {description}</p>
            <p>Skills: {meta.skills}</p>
            <p>LessonsCount: {lessonsCount}</p>
            <p>rating: {rating}</p>
          </li>
        );
      })}
    </ul>
  );
};

CoursesList.propTypes = {
  coursesList: PropTypes.array.isRequired,
};


