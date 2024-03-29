import * as types from '../types';
import axios from 'axios';

export const fetchCoursesStart = () => ({
    type: types.FETCH_COURSES_START
});

export const fetchCoursesSuccess = (payload) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload
})

export const fetchCoursesFail = (error) => ({
    type: types.FETCH_COURSES_FAIL,
    payload: error
});
export const fetchCourseStart = () => ({
    type: types.FETCH_COURSES_START
});

export const fetchCourseSuccess = (payload) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload
})

export const fetchCourseFail = (error) => ({
    type: types.FETCH_COURSES_FAIL,
    payload: error
});
export const fetchRecoLessonStart = () => ({
    type: types.FETCH_RECOMEND_COURSE_START
});
export const fetchRecoLessonSuccess = (payload) => ({
    type: types.FETCH_RECOMEND_COURSE_SUCCESS,
    payload
});
export const fetchRecoLessonFail = (error) => ({
    type: types.FETCH_RECOMEND_COURSE_FAIL,
    payload: error
});
export const fetchUnicefRecoStart = () => ({
    type: types.FETCH_UNICEF_RECOMEND_START
});
export const fetchUnicefRecoSuccess = (payload) => ({
    type: types.FETCH_UNICEF_RECOMEND_SUCCESS,
    payload
});
export const fetchUnicefRecoFail = (error) => ({
    type: types.FETCH_UNICEF_RECOMEND_FAIL,
    payload: error
});

export const fetchSingleLessonStart = () => ({
    type: types.FETCH_SINGLE_LESSON_START
});
export const fetchSingleLessonSuccess = (payload) => ({
    type: types.FETCH_SINGLE_LESSON_SUCCESS,
    payload
});
export const fetchSingleLessonFail = (error) => ({
    type: types.FETCH_SINGLE_LESSON_FAIL,
    payload: error
});
export const fetchLessonStart = () => ({
    type: types.FETCH_LESSONS_START
});
export const fetchLessonSuccess = (payload) => ({
    type: types.FETCH_LESSONS_SUCCESS,
    payload
});
export const fetchLessonFail = (error) => ({
    type: types.FETCH_LESSONS_FAIL,
    payload: error
});

// export const fetchCourseInitiate = () =>  {
//     return function (dispatch) {
//         dispatch(fetchCoursesStart())
//         axios
//         // .get('https://afrilearn-backend-01.herokuapp.com/api/v1/courses')
//         .get('http://localhost:5000/api/v1/courses')
//         .then((res) => {
//             // console.log("Hello from courses API")
//             // console.log("From Courses API =>", res)
//             dispatch(fetchCoursesSuccess(res))
//         })
//         .catch((err) => {
//             dispatch(fetchCoursesFail(err))
//         } )
//     }

// }

export const fetchLessonsInitiate = () =>  {
    return function (dispatch) {
        dispatch(fetchLessonStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/lessons')
        // .get('http://localhost:5000/api/v1/lessons')
        .then((res) => {
            console.log("Hello from Lessons API")
            console.log("From Lessons API =>", res.data.data)
            dispatch(fetchLessonSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchLessonFail(err))
        } )
    }

}

export const fetchSingleLessonInitiate = (lessonId) =>  {
    return function (dispatch) {
        dispatch(fetchSingleLessonStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${lessonId}`)
        .then((res) => {
            dispatch(fetchSingleLessonSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchSingleLessonFail(err))
        } )
    }

}

export const fetchReconLessonInitiate = (userId, token) =>  {
    return function (dispatch) {
        dispatch(fetchRecoLessonStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/recommendations',
            {   userId  },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            // dispatch(fetchRecoLessonSuccess(res.data.data))
            // console.log("Hello from reconmendation API after call ===>")
            // console.log("From reconmendation API =>", res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

export const fetchUnicefReconInitiate = (schoollevel, reco_subject, lessonId) =>  {
    return function (dispatch) {
        dispatch(fetchUnicefRecoStart())
        axios
        .post('https://unicef-afrilearn-recon-api.herokuapp.com/recommend',
        {   
            schoollevel: schoollevel,
            subject: reco_subject,
            lesson: lessonId,
            length: 3
        })
        .then((res) => {
            dispatch(fetchUnicefRecoSuccess(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

