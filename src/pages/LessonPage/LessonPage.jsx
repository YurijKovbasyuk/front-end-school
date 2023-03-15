import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
// import BtnGoBack from '../components/BtnGoBack/BtnGoBack';
import { getOneCourseByIdAPI } from 'API/API';

const LessonPage = () => {
    const location = useLocation();
    const [course, setCourse] = useState({});
    const [error, setErr] = useState('');
    const { courseId } = useParams();
    // const imgUrl = 'https://image.tmdb.org/t/p/w400';
    console.log('courseId', courseId);
    // const id = parseInt(location.pathname.match(/\d+/));
    // console.log('id', id);

    useEffect(() => {
        getOneCourseByIdAPI(courseId)
            .then(setCourse)
            .catch(error => {
                console.log(error);
                setErr(error);
                throw error;
            });
    }, [courseId]);

    const { title, vote_averag, overview, genres } = course;
    return (
        <>
            {error ? (
                <p>Wrong URL</p>
            ) : (
                <>
                    {/* <BtnGoBack /> */}
                    <div>
                        {/* <img src={poster_path && imgUrl + poster_path} alt="" width="20%" /> */}
                        <div >
                            <h2>{title}</h2>
                            <p>User Score {vote_averag}</p>
                            <h3>Overvies</h3>
                            <p>{overview}</p>
                            <h3>Genres</h3>
                            <ul>
                                {genres?.map(genre => {
                                    const { id, name } = genre;
                                    return <li key={id}>{name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            padding: '10px 30px',
                        }}
                    >
                        <span
                            style={{
                                marginRight: '10px',
                            }}
                        >
                            Additional informaintion
                        </span>
                        <Link
                            style={{
                                marginRight: '10px',
                                textDecoration: 'none',
                            }}
                            to={`/courses/${courseId}`}
                            state={{ from: location.state?.from ?? '/' }}
                        >
                            Cast
                        </Link>
                    </div>
                    <Outlet />
                </>
            )}
        </>
    );
};

export default LessonPage;
