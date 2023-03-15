import {
    useState, useEffect,
    // Suspense

} from 'react';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { getAllCoursesAPI } from 'API/API';
// import { Spinner } from 'components';

const CoursesPage = () => {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        getAllCoursesAPI()
            .then(data => {
                setCoursesList(data);
            })
            .catch(err => {
                throw err;
            });
    }, []);


    return (
        <>

            <h1>CoursesPage START</h1>

            <CoursesList coursesList={coursesList} />

        </>
    );
};


export default CoursesPage