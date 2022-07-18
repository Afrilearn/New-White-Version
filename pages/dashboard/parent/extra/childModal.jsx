import React, { useState } from 'react';
import styles from '../../../../styles/parentdashboard.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const ChildModal = ({show, showChildDetails, data, studentId}) => {
  return (

    // <div className={styles.modalwrapper}>
    //     <div className={styles.modaltitlewrapper}>
    //       <ul>
    //     { data && data.filter(student => student.id === studentId).map((filteredStudent) =>   
    //       <>
    //         <li>{filteredStudent.id}</li>
    //         <li>{filteredStudent.studentName}</li>
    //         <li>{filteredStudent.studentEmail}</li>
    //         <li>{filteredStudent.studentClass}</li>
    //       </>
    //     )}
    //       </ul> 
    //     </div>
    // </div>
    <Modal show aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className={` ${styles.modaltitle} d-flex flex-row justify-content-between`}>
          <h4 className='mr-5'>Other Details</h4> <h5 onClick={() => showChildDetails()}>X</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className={styles.modalbodywrapper}>
                  { data && data.filter(student => student.id === studentId).map((filteredStudent) => 
                  <>
                     <Col xs={12} md={8}>Name: {filteredStudent.studentName}</Col> 
                     <Col xs={12} md={8}>Email: {filteredStudent.studentName}</Col>

                    <Col xs={12} md={8}>Password: {filteredStudent.studentName}</Col>
                    <Col xs={12} md={8}>Class: {filteredStudent.studentClass}</Col>
                
                  </>
                  )}
                
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default ChildModal