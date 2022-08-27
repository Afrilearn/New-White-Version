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
export const deleteTeacherStart = () => ({
    type: types.DELETE_TEACHER_START
});

export const deleteTeacherSuccess = (payload) => ({
    type: types.DELETE_TEACHER_SUCCESS,
    payload
});

export const deleteTeacherFail = (error) => ({
    type: types.DELETE_TEACHER_FAIL,
    payload: error
});
export const deleteStudentStart = () => ({
    type: types.DELETE_STUDENT_START
});

export const deleteStudentSuccess = (payload) => ({
    type: types.DELETE_STUDENT_SUCCESS,
    payload
});

export const deleteStudentFail = (error) => ({
    type: types.DELETE_STUDENT_FAIL,
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
export const fetchSchoolProfileStart = () => ({
    type: types.FETCH_SCHOOL_PROFILE_START
});

export const fetchSchoolProfileSuccess = (payload) => ({
    type: types.FETCH_SCHOOL_PROFILE_SUCCESS,
    payload
});

export const fetchSchoolProfileFail = (error) => ({
    type: types.FETCH_SCHOOL_PROFILE_FAIL,
    payload: error
});

export const fetchSchoolMemberClassStart = () => ({
    type: types.FETCH_SCHOOL_MEMBER_CLASS_START
});

export const fetchSchoolMemberClassSuccess = (payload) => ({
    type: types.FETCH_SCHOOL_MEMBER_CLASS_SUCCESS,
    payload
});

export const fetchSchoolMemberClassFail = (error) => ({
    type: types.FETCH_SCHOOL_MEMBER_CLASS_FAIL,
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
    export const addNewTeacherInitiate = (classId, email, schoolId) =>  {
        return function (dispatch) {
            dispatch(addNewTeacherStart())
            axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/add-user-as-teacher',
            {   
                classId,
                email, 
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
    export const addNewStudentInitiate = (
        courseId,
        classId,
        fullName, 
        email, 
        password,
        schoolId
        ) =>  {
        return function (dispatch) {
            dispatch(addNewStudentStart())
            axios
            .post('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/sign-up-for-student',
            {   
                courseId,
                classId,
                fullName, 
                email, 
                password,
                schoolId
            })
            .then((res) => {
                dispatch(addNewStudentSuccess(res.data))
                console.log("Add Student from School API ===>", res.data)
            })
            .catch((err) => {
                dispatch(addNewStudentFail(err))
            })
        }

    }

    export const fetchSchoolProfileInitiate = (schoolId) =>  {
        return function (dispatch) {
            dispatch(fetchSchoolProfileStart())
            axios
            .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/schools/${schoolId}`
            )
            .then((res) => {
                dispatch(fetchSchoolProfileSuccess(res.data.data))
                console.log("Hello from school profile API ===>", res.data.data)
            })
            .catch((err) => {
                dispatch(fetchSchoolProfileFail(err))
            })
        }
    
}

    export const fetchSchoolMemberClassInitiate = (classId) =>  {
        console.log("classId from API call", classId)
        return function (dispatch) {
            dispatch(fetchSchoolMemberClassStart())
            axios
            .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/students`
            )
            .then((res) => {
                dispatch(fetchSchoolMemberClassSuccess(res.data))
                console.log("Hello from school member API ===>", res.data)
            })
            .catch((err) => {
                dispatch(fetchSchoolMemberClassFail(err))
            })
        }
    
    }

    export const deleteTeacherInitiate = (userId, schoolId) =>  {
        console.log("userId from API call", userId)
        return function (dispatch) {
            dispatch(deleteTeacherStart())
            axios
            .delete('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/delete-teacher-account',
            {
                data:{userId: userId, schoolId: schoolId}
            }
            )
            .then((res) => {
                dispatch(deleteTeacherSuccess(res.data))
                console.log("Hello from delete teacher API ===>", res.data)
            })
            .catch((err) => {
                dispatch(deleteTeacherFail(err))
            })
        }
    
    }
    export const deleteStudentInitiate = (userId, schoolId) =>  {
        return function (dispatch) {
            dispatch(deleteStudentStart())
            axios
            .delete('https://afrilearn-backend-01.herokuapp.com/api/v1/schools/delete-student-account',
            {
                data:{userId: userId, schoolId: schoolId}
            }
            )
            .then((res) => {
                dispatch(deleteStudentSuccess(res.data))
                console.log("Hello from delete teacher API ===>", res.data)
            })
            .catch((err) => {
                dispatch(deleteStudentFail(err))
            })
        }
    
    }