import axios from 'axios';

const baseURL = 'https://api.wisey.app/';
axios.defaults.baseURL = baseURL;

// Функція для отримання токена та переходу на головну сторінку
export const getAllCoursesAPI = async () => {
  const response = await axios.get(
    'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
  );
  const token = response.data.token;
  // Записуємо токен у local storage
  localStorage.setItem('token', token);
  // Переходимо за адресом з використанням отриманого токену
  const apiResponse = await axios.get('api/v1/core/preview-courses', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiResponse;
};

// Функція для переходу за адресом на сторінку з уроками
export const getOneCourseByIdAPI = courseId => {
  // Отримуємо токен з local storage
  const token = localStorage.getItem('token');
  // Переходимо за адресом з використанням отриманого токену
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(`api/v1/core/preview-courses/${courseId}`)
    .then(res => res.data);
};
