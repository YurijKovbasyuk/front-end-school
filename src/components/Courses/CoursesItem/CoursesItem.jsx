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
        <ImgWrapper>
          <img
            src={
              previewImageLink ? previewImageLink + '/cover.webp' : defaultImg
            }
            alt={description}
          ></img>
        </ImgWrapper>
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
  meta: PropTypes.object.isRequired,
};
