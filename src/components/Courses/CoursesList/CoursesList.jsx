import { useState, useEffect } from 'react';
import { getAllCoursesAPI } from 'API/API';
import { CoursesItem, Pagination, Spinner } from 'components';
import { CoursesListStyle } from './CoursesList.styled';

export const CoursesList = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(10);

  const lastContentIndex = currentPage * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const currentContent = coursesList.slice(firstContentIndex, lastContentIndex);

  const paginate = pageNamber => setCurrentPage(pageNamber);

  useEffect(() => {
    setLoading(true);
    getAllCoursesAPI()
      .then(res => res.data.courses)
      .then(data => {
        setCoursesList(data);
      })
      .catch(err => {
        throw err;
      });
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner></Spinner>;
  }
  console.log('coursesList', coursesList);
  if (coursesList) {
    return (
      <>
        <CoursesListStyle>
          {currentContent.map(
            ({
              id,
              title,
              description,
              previewImageLink,
              lessonsCount,
              rating,
              meta,
            }) => {
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
        <Pagination
          contentPerPage={contentPerPage}
          totalContent={coursesList.length}
          paginate={paginate}
        />
      </>
    );
  }
};
