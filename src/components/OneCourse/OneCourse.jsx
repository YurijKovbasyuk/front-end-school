import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCourseByIdAPI } from 'API/API';
import { Player, Spinner, ShowVideoPlayer } from 'components';
import {
  Wrapper,
  Title,
  LessonTitle,
  ImgWrapper,
  LessonList,
  InfoItem,
  Description,
} from './OneCourse.styled';

export const OneCourse = () => {
  const [oneCourse, setOneCourse] = useState({});
  const [error, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();
  const [showPlayer, setShowPlayer] = useState(null);

  useEffect(() => {
    // Вказуємо стан для відображення спінера
    setLoading(true);
    // Отримуємо данні про один курс по id
    getOneCourseByIdAPI(courseId)
      .then(data => {
        setOneCourse(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setErr(error);
        setLoading(false);
        throw error;
      });
  }, [courseId]);

  const { title, lessons, description } = oneCourse;

  // Сортування уроків одного курсу в порядку зростання
  lessons?.sort((lessons1, lessons2) => lessons1.order - lessons2.order);

  // Отримання URI відео першого уроку
  let urlFirstVideo = null;
  if (lessons?.length > 0) {
    urlFirstVideo = lessons?.[0].link;
  }

  // Обробник подій для заміни обраного постера уроку на відеоплеєр
  const handleClick = order => {
    setShowPlayer(order);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <Wrapper>
              <Title>{title}</Title>
              {urlFirstVideo !== undefined ? (
                <Player autoPlay url={urlFirstVideo}></Player>
              ) : (
                <p>No video added</p>
              )}

              <Description>{description}</Description>
              <LessonList>
                {lessons?.map(lesson => {
                  const { id, title, previewImageLink, order, status, link } =
                    lesson;
                  return (
                    <InfoItem key={id}>
                      <LessonTitle>
                        Lesson {order}: {title}
                        {status === 'locked' ? (
                          <span style={{ color: 'red' }}> Lesson loked</span>
                        ) : null}
                      </LessonTitle>
                      <ImgWrapper>
                        <ShowVideoPlayer
                          order={order}
                          status={status}
                          link={link}
                          previewImageLink={previewImageLink}
                          description={description}
                          showPlayer={showPlayer}
                          handleClick={handleClick}
                        />
                      </ImgWrapper>
                    </InfoItem>
                  );
                })}
              </LessonList>
            </Wrapper>
          </>
        )}
      </>
    );
  }
};
