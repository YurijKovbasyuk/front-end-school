import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from 'data/img/default.webp';
import { getOneCourseByIdAPI } from 'API/API';
import {
  Wrapper,
  Title,
  LessonTitle,
  ImgWrapper,
  LessonList,
  InfoItem,
  Item,
  Description,
} from './OneCourse.styled';

export const OneCourse = () => {
  const [oneCourse, setOneCourse] = useState({});
  const [error, setErr] = useState('');
  const { courseId } = useParams();

  console.log('courseId', courseId);

  useEffect(() => {
    getOneCourseByIdAPI(courseId)
      .then(setOneCourse)
      .catch(error => {
        console.log(error);
        setErr(error);
        throw error;
      });
  }, [courseId]);

  const { title, lessons, description } = oneCourse;
  return (
    <>
      {error ? (
        <p>Wrong URL</p>
      ) : (
        <>
          <Wrapper>
            <Title>{title}</Title>
            <video
              src="https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8"
              controls
            ></video>
            <Description>{description}</Description>
            <LessonList>
              {lessons?.map(lesson => {
                const { id, title, previewImageLink, order, status } = lesson;
                return (
                  <InfoItem key={id}>
                    <LessonTitle>
                      Lesson {order}: {title}
                    </LessonTitle>
                    <ImgWrapper>
                      <img
                        src={
                          previewImageLink
                            ? previewImageLink + '/lesson-' + order + '.webp'
                            : defaultImg
                        }
                        alt={description}
                      ></img>
                    </ImgWrapper>
                    <Item>Status: {status}</Item>
                  </InfoItem>
                );
              })}
            </LessonList>
          </Wrapper>
        </>
      )}
    </>
  );
};
