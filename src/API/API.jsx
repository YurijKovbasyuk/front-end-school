import axios from 'axios';

const HEADER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const BODY = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
const SIGNATURE = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
const TOKEN = [HEADER, BODY, SIGNATURE].join('.')
const AuthorizationToken = (`Bearer ${TOKEN}`)

const baseURL = 'https://api.wisey.app/api/v1/';
axios.defaults.baseURL = baseURL;


export const getAllCoursesAPI = () => {
    axios.defaults.headers = {
        'Authorization': `${AuthorizationToken}`
    };
    return axios.get('core/preview-courses').then(res => res.data.courses);
};

export const getOneCourseByIdAPI = courseId => {
    axios.defaults.headers = {
        'Authorization': `${AuthorizationToken}`,
        language: 'en-US'
    };

    return axios.get('core/preview-courses' + courseId).then(res => res.data);
};
