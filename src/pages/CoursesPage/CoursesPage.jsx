import {
    useState, useEffect,
    // Suspense

} from 'react';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { getAllCoursesAPI } from 'API/API';
// import { Spinner } from 'components';

const CoursesPage = () => {
    const [coursesList, setCoursesList] = useState([]);
    // const [previewImage, setPreviewImage] = useState([]);

    useEffect(() => {
        getAllCoursesAPI()
            .then(data => {
                setCoursesList(data);
            })
            .catch(err => {
                throw err;
            });
    }, []);

    // useEffect(() => {
    //     getPreviewImage()
    //         .then(data => {
    //             setPreviewImage(data);
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             throw err;
    //         });
    // }, []);



    return (
        <>

            <h1>CoursesPage START</h1>

            <CoursesList coursesList={coursesList}
            // previewImage={previewImage}
            />

        </>
    );
};


export default CoursesPage