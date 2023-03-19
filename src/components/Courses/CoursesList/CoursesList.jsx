import { useState, useEffect } from 'react';
import { getAllCoursesAPI } from 'API/API';
import { CoursesItem, Pagination, Spinner } from 'components';
import { CoursesListStyle } from './CoursesList.styled';

export const CoursesList = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [error, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(10);

  // Пагінація сторінки
  const lastContentIndex = currentPage * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const currentContent = coursesList.slice(firstContentIndex, lastContentIndex);

  // Зберігаємо номер поточної сторінки в localStorage
  const paginate = pageNamber => {
    setCurrentPage(pageNamber);
    localStorage.setItem('currentPage', pageNamber);
  };

  // Зчитуємо номер поточної сторінки з localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage));
    }
  }, []);

  useEffect(() => {
    // Вказуємо стан для відображення спінера
    setLoading(true);
    // Отримуємо данні про всі кури
    getAllCoursesAPI()
      .then(res => res.data.courses)
      .then(data => {
        setCoursesList(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(error);
        setErr(error);
        setLoading(false);
        throw error;
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (coursesList) {
    return (
      <>
        {error ? (
          <p>{error}</p>
        ) : (
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
        )}
      </>
    );
  }
};
