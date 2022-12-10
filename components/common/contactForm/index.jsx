import React from 'react';

import styles from './form.module.css';
import { IoIosSend } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

const ContactForm = () => {
  return (
    <div className={styles.contactformwrapper}>
        <div className={styles.leftwrapper}>
           <h2>Contact details</h2>
           <p>Kindly get in touch</p>
           <div>
                <div className={styles.addresswrapper}>
                    <div className={styles.iconwrapper}>
                        <IoIosSend size={30}/>
                    </div>
                    <div className={styles.contentwrapper}>
                        <h5>Corporate Address</h5>
                        <p>6 Gbemisola Street, opposite Kalakuta Museum, First Bank Bus stop, Allen Avenue, Ikeja Lagos</p>
                    </div>
                </div>
                <div className={styles.telephonewrapper}>
                <div className={styles.iconwrapper}>
                    <BsTelephoneFill  size={30}/>
                </div>
                    <div className={styles.contentwrapper}>
                        <h5>Telephone</h5>
                        <p>[+234]  802 785 5262, [+234] 805 154  4949</p>
                    </div>
                </div>
                <div className={styles.emailwrapper}>
                <div className={styles.iconwrapper}>
                    <MdOutlineMail size={30}/>
                </div>
                    <div className={styles.contentwrapper}>
                        <h5>Email</h5>
                        <p>hello@myafrilearn.com</p>
                    </div>
                </div>
           </div>   
        </div>
        <div className={styles.rightformwrapper}>
            <h2>Send a message</h2>
            <form>
                <div>
                    <input placeholder='Email' type='email' />
                    <input placeholder='Phone' type='text' />
                </div>
                <div>
                    <textarea rows='8'/>
                </div>
                <button>Send message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm