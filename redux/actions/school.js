import * as types from '../types/school';
import axios from 'axios';


export const addNewAdminStart = () => ({
    type: types.ADD_NEW_ADMIN_START
});

export const addNewAdminSuccess = (payload) => ({
    type: types.ADD_NEW_ADMIN_SUCCESS,
    payload
});

export const addNewAdminFail = (error) => ({
    type: types.ADD_NEW_ADMIN_FAIL,
    payload: error
});
export const addNewTeacherStart = () => ({
    type: types.ADD_NEW_TEACHER_START
});

export const addNewTeacherSuccess = (payload) => ({
    type: types.ADD_NEW_TEACHER_SUCCESS,
    payload
});

export const addNewTeacherFail = (error) => ({
    type: types.ADD_NEW_TEACHER_FAIL,
    payload: error
});
export const addNewStudentStart = () => ({
    type: types.ADD_NEW_STUDENT_START
});

export const addNewStudentSuccess = (payload) => ({
    type: types.ADD_NEW_STUDENT_SUCCESS,
    payload
});

export const addNewStudentFail = (error) => ({
    type: types.ADD_NEW_STUDENT_FAIL,
    payload: error
});

export const addNewAdminInitiate = (fullName, email, password, schoolId, confirmPassword, roleDescription) =>  {
    return function (dispatch) {
        dispatch(addNewAdminStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/sign-up-for-admin',
        {   
            fullName,
            email,
            password,
            schoolId,
            confirmPassword,
            roleDescription
        })
        .then((res) => {
            dispatch(addNewAdminSuccess(res.data))
            console.log("Add Admin from School API ===>", res.data)
        })
        .catch((err) => {
            dispatch(addNewAdminFail(err))
        })
    }

}
    export const addNewTeacherInitiate = (
            courseId, 
            fullName, 
            email, 
            password,
            confirmPassword,
            schoolId        
            ) =>  {
        return function (dispatch) {
            dispatch(addNewTeacherStart())
            axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/sign-up-for-teacher',
            {   
                courseId, 
                fullName, 
                email, 
                password,
                confirmPassword,
                schoolId
            })
            .then((res) => {
                dispatch(addNewTeacherSuccess(res.data))
                console.log("Add Admin from School API ===>", res.data)
            })
            .catch((err) => {
                dispatch(addNewTeacherFail(err))
            })
        }

    }
    export const addNewStudentInitiate = (fullName, email, password, schoolId, confirmPassword, roleDescription) =>  {
        return function (dispatch) {
            dispatch(addNewStudentStart())
            axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/sign-up-for-student',
            {   
                fullName,
                email,
                password,
                schoolId,
                confirmPassword,
                roleDescription
            })
            .then((res) => {
                dispatch(addNewStudentSuccess(res.data))
                console.log("Add Admin from School API ===>", res.data)
            })
            .catch((err) => {
                dispatch(addNewStudentFail(err))
            })
        }

    }