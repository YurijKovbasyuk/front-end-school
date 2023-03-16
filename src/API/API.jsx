import axios from 'axios';

// const HEADER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
// const BODY = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
// const SIGNATURE = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
// const TOKEN = [HEADER, BODY, SIGNATURE].join('.')
// const AuthorizationToken = (`Bearer ${TOKEN}`)

const AuthorizationToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NmU4YjA4OS0zMjEwLTQ4MDUtOTA3Ni05MDdiMDUzNGRjZmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5MTA3NjksImV4cCI6MTY3OTgxMDc2OX0.qDFtfrMs_-hZt-sTgVkhksG15TBLApegpm4kXFxSQIQ';

const baseURL = 'https://api.wisey.app/';
axios.defaults.baseURL = baseURL;


export const getAllCoursesAPI = () => {
    axios.defaults.headers = {
        'Authorization': `${AuthorizationToken}`,
        language: 'en-US',
        cors: {
            origin: ['https://yurijkovbasyuk.github.io', 'http://localhost:3000'],
            methods: 'GET',
        },
    };
    return axios.get(`api/v1/core/preview-courses`).then(res => res.data.courses);
};

export const getOneCourseByIdAPI = courseId => {
    axios.defaults.headers = {
        'Authorization': `${AuthorizationToken}`,
        language: 'en-US',
        cors: {
            origin: ['https://yurijkovbasyuk.github.io', 'http://localhost:3000'],
            methods: 'GET',
        },
    };

    return axios.get(`api/v1/core/preview-courses/${courseId}`).then(res => res.data);
};

// export const getPreviewImage = () => {
//     axios.defaults.headers = {
//         'Authorization': `${AuthorizationToken}`
//     };
//     return axios.get(`assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it`).then(res => res.data);
// }