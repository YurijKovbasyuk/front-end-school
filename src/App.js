// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CoursesPage from './pages/CoursesPage/CoursesPage';
import OneCoursePage from './pages/OneCoursePage/OneCoursePage';

// const Courses = lazy(() => import('./pages/CoursesPage/CoursesPage'));
// const Lesson = lazy(() => import('./pages/LessonPage/LessonPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<OneCoursePage />} />
        <Route path="*" element={<Navigate to="/courses" replace />} />
      </Routes>
    </>
  );
}

export default App;
