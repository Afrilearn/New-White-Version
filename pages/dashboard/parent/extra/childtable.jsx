import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';

import { MdOutlineCheckBoxOutlineBlank,MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from '../../../../styles/parentdashboard.module.css';
import ChildModal from './childModal';


const Childtable = ({myChildren}) => {
  console.log("myChildren from my children component", myChildren)
    const data = [
        {
            id: 1,
            studentName: "Johnson Adewunigbe",
            studentClass: "JSS1 , JSS2",
            studentEmail: "johnsonA@gmail.com",
        },

        {
            id: 2,
            studentName: "Olatunbosun Adewunigbe",
            studentClass: "SSS 3",
            studentEmail: "olatunbosunA@gmail.com",
        },
    ]



    const [showModal, setShowModal] = useState(false);
    const [studentId, setStudentId] = useState(null)

    const showChildDetails = (id) => {
        setStudentId(id)
        setShowModal(!showModal)
    }
  return (
    <div className={styles.tablewrapper}>
       <Table striped bordered hover className='mx-5 p-5'>
      <thead>
        <tr>
        <td><MdOutlineCheckBoxOutlineBlank /></td>
          <th>Name</th>
          <th>Class(es)</th>
          <th>Email</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
          { myChildren && myChildren.map((myChild) => 
        <tr key={myChild.id}>
              <>
                <td><MdOutlineCheckBoxOutlineBlank /></td>
                <td onClick={(() => showChildDetails(myChild.id))}>{myChild.fullName}</td>
                <td>{myChild?.enrolledCourses[0]?.courseId.name? myChild?.enrolledCourses[0]?.courseId.name : "Not enrolled"}</td>
                <td>{myChild.email}</td>
                <td><MdOutlineArrowForwardIos /></td>
              </>
        </tr>
          )}
      </tbody>
    </Table>
      <div className={styles.modalwrapperouter}>
      { showModal && <ChildModal show={showModal} showChildDetails={showChildDetails} data={data} studentId={studentId}/>}
      </div>      
    </div>
  )
}

export default Childtable