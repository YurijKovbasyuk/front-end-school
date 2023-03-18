import React from 'react';
import {
  Wrapper,
  Button,
  CourseWrapper,
  ImgWrapper,
  SkillsList,
  InfoItem,
  SubjectItem,
  CourseDescription,
} from './Pagination.styled';

export const Pagination = ({ contentPerPage, totalContent, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {pageNumbers.map(number => (
        <li key={number}>
          <Button onClick={() => paginate(number)}>{number}</Button>
        </li>
      ))}
    </Wrapper>
  );
};
