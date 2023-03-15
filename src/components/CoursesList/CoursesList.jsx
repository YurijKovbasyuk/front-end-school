import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CoursesList = ({ coursesList }) => {
  const location = useLocation();

  return (
    <ul>
      {coursesList.map(course => {
        const { id, title, description
        } = course;
        return (
          <li key={id}>
            <Link
              className="link"
              to={`/courses/${id}`}
              state={{ from: location }}
            >
              <h2>{title}</h2>

            </Link>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

CoursesList.propTypes = {
  coursesList: PropTypes.array.isRequired,
};


