import PropTypes from 'prop-types';
import defaultImg from 'data/img/default.webp';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Card,
  CourseTitle,
  CourseWrapper,
  ImgWrapper,
  SkillsList,
  InfoItem,
  SubjectItem,
  CourseDescription,
} from './CoursesItem.styled';

export const CoursesItem = ({
  id,
  title,
  description,
  previewImageLink,
  lessonsCount,
  rating,
  meta,
}) => {
  const location = useLocation();

  return (
    <Card>
      <CourseTitle>
        <NavLink to={`/courses/${id}`} state={{ from: location }}>
          {title}
        </NavLink>
      </CourseTitle>
      <CourseWrapper>
        <ImgWrapper
          src={previewImageLink ? previewImageLink + '/cover.webp' : defaultImg}
          alt={description}
        ></ImgWrapper>
        <CourseDescription>{description}</CourseDescription>

        <SubjectItem>Lessons count: {lessonsCount}</SubjectItem>
        <SubjectItem>Rating: {rating}</SubjectItem>
        <SkillsList>
          <p>Skills: </p>
          <InfoItem>{meta.skills}</InfoItem>
        </SkillsList>
      </CourseWrapper>
    </Card>
  );
};

CoursesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewImageLink: PropTypes.string.isRequired,
  lessonsCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  meta: PropTypes.object.isRequired,
};
