import * as types from "../types/course";
import axios from "axios";

export const fetchCourseStart = () => ({
  type: types.FETCH_COURSE_START,
});

export const fetchCourseSuccess = (payload) => ({
  type: types.FETCH_COURSE_SUCCESS,
  payload,
});

export const fetchCourseFail = (error) => ({
  type: types.FETCH_COURSE_FAIL,
  payload: error,
});
export const fetchSchoolTermStart = () => ({
  type: types.FETCH_SCHOOL_TERM_START,
});

export const fetchSchoolTermSuccess = (payload) => ({
  type: types.FETCH_SCHOOL_TERM_SUCCESS,
  payload,
});

export const fetchSchoolTermFail = (error) => ({
  type: types.FETCH_SCHOOL_TERM_FAIL,
  payload: error,
});
export const fetchSingleCourseStart = () => ({
  type: types.FETCH_SINGLE_COURSE_START,
});

export const fetchSingleCourseSuccess = (payload) => ({
  type: types.FETCH_SINGLE_COURSE_SUCCESS,
  payload,
});

export const fetchSingleCourseFail = (error) => ({
  type: types.FETCH_SINGLE_COURSE_FAIL,
  payload: error,
});

export const getCourseInitiate = (classId) => {
  return function (dispatch) {
    dispatch(fetchCourseStart());
    axios
      .get(
        `https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${classId}`,
      )
      .then((res) => {
        dispatch(fetchCourseSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchCourseFail(err.response));
      });
  };
};

export const fetchSchoolTermInitiate = () => {
  return function (dispatch) {
    dispatch(fetchSchoolTermStart());
    axios
      .get("https://afrilearn-backend-01.herokuapp.com/api/v1/terms")
      .then((res) => {
        console.log("From School term API =>", res.data.data);
        dispatch(fetchSchoolTermSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchSchoolTermFail(err));
      });
  };
};
export const fetchSingleCourseInitiate = (courseId) => {
  return function (dispatch) {
    dispatch(fetchSingleCourseStart());
    axios
      .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${courseId}`)
      .then((res) => {
        dispatch(fetchSingleCourseSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchSingleCourseFail(err.response.data));
      });
  };
};
