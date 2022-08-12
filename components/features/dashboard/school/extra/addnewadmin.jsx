import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import styles from "../../school/addstudent.module.css";
 import { fetchRoles } from "../../../../../redux/actions/auth";

const AddnewAdmin = () => {
    const { user, registerUser, roles } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    console.log("School logged in from add student==>",user.user?.schoolId.id)

    const schoolId = user.user?.schoolId.id 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fullName, email, password, schoolId, confirmPassword)
    }

    return (
        <>
        <div className={styles.videoheropage}> 
         <h4 className={styles.heading}>Add New Student</h4>
         </div>
         <div  className={styles.addstudentContainer}>
            <div className={styles.heading1}><h4>Add New Admin</h4></div>
            <div>Add your admin to the league of world class learners on Afrilearn</div>
            <form className= { `row ${styles.form}`} onSubmit={handleSubmit}>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder="Fullname"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                />
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    className={styles.input}
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <input 
                    className={styles.input}
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            <button className={styles.studentButton} type='submit'>REGISTER</button>
            </form>
         </div>
        </>
       
    )
};

export default AddnewAdmin;