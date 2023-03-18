import PropTypes from 'prop-types';
import { Wrapper, Button } from './Pagination.styled';

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

Pagination.propTypes = {
  contentPerPage: PropTypes.number.isRequired,
  totalContent: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
