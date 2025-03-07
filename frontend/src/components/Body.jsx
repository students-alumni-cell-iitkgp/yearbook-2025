import React, { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "./Body.module.css";
import photo from "../img/Rupesh.1.jpg";

import { FcOldTimeCamera } from "react-icons/fc";

const Body = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blur, setBlur] = useState(0);
  const tableRef = useRef(null);
  const inputFile = useRef(null);

  const editProfile = () => {
    setIsVisible(true);
    setBlur(5); // Add blur effect
    document.body.style.overflow = "hidden";
  };

  const closeEditProfile = () => {
    setIsVisible(false);
    setBlur(0); // Remove blur effect
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <div
        className={`${styles.container} ${
          isVisible ? styles.blurBackground : ""
        }`}
      >
        <div className={styles.profileCard}>
          <div className={styles.imageSection}>
            <img src={photo} alt="Profile" className={styles.profileImage} />
          </div>
          <div className={styles.infoSection}>
            <div className={styles.nameCaption}>
              <h2>Nirmal Patidar</h2>
              <p>Your Caption Here!</p>
            </div>
            <div className={styles.details}>
              <h3>Introduction:</h3>
              <table
              className={styles.intro_table}
            //   style={{ backgroundColor: "#1b2a4e" }}
            >
              
              
              <tr>
                <td><p>
                <strong>📜 Roll No:</strong> 
              </p></td>
                <td>
                <p>
                <strong>23EE10058</strong> 
              </p>
                </td>
              </tr>
              <tr>
                <td>
                <p>
                <strong>🏠 Hall of Residence:</strong> 
              </p>
                </td>
                <td>
                <p>
                <strong>RadhaKrishnan</strong> 
              </p>
                </td>
              </tr>
              <tr>
                <td>
                <p>
                <strong>📧 Email:</strong> 
              </p>
                </td>
                <td>
                <p>
                <strong>rsahoobnd@gmail.com</strong> 
              </p>
                </td>
              </tr>
              <tr >
                <td >
                <p>
                <strong>🏛  Department:</strong>
                </p>
                </td>
                <td>
                <p>
                <strong>Electrical Engg.</strong> 
              </p>
                </td>
              </tr>
            </table>
              {/* <p>
                <strong>📜 Roll No:</strong> 23XX10023
              </p>
              <p>
                <strong>🏠 Hall of Residence:</strong> Azad
              </p>
              <p>
                <strong>📧 Email:</strong> naksh@123.com
              </p>
              <p>
                <strong>🏛 Department:</strong> Agricultural and Food Engineering
              </p> */}
              <button className={styles.editButton} onClick={editProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <button className={styles.testimonialButton}>Write Testimonials</button>

        <p className={styles.testimonialText}>
          Here's what your friends have written about you! Your testimonials are
          displayed below.
        </p>

        <div className={styles.tabs}>
          <button className={styles.Tab1}>Gallery</button>
          <button className={styles.Tab1}>Testimonials</button>
          <button className={styles.Tab1}>Articles</button>
        </div>

        <p className={styles.noTestimonials}>No Testimonials Given!</p>
      </div>
      {isVisible && (
        <div className={styles.overlay}>
          <div className={styles.editProfile}>
            <RxCross2
              className={styles.closeButton}
              size={26}
              onClick={closeEditProfile}
            />
            <h3 style={{ color: "white" }}>Edit Profile</h3>
            <table
              className={styles.table}
            //   style={{ backgroundColor: "#1b2a4e" }}
            >
              <tr>
                <td>Change Profile Picture:</td>
                <td>
                  <label htmlFor="pic" className={styles.fileLabel}>
                    <FcOldTimeCamera size={22} style={{translate:'0px 4px'}}></FcOldTimeCamera> Browse File
                  </label>
                  <input type="file" id="pic" className={styles.hiddenInput} />
                </td>
              </tr>
              <tr>
                <td>Caption:</td>
                <td>
                  <input type="text" placeholder="Upload your Caption Here." className={styles.input}/>
                </td>
              </tr>
              <tr>
                <td>Roll No.:</td>
                <td>
                  <input type="text" placeholder="23XX10058" className={styles.input}/>
                </td>
              </tr>
              <tr>
                <td>Hall of Residence:</td>
                <td>
                  <input type="text" placeholder="RadhaKrishnan" className={styles.input}/>
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" placeholder="rsahoo@gmail.com" className={styles.input}/>
                </td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>
                  <input type="text" placeholder="Electrical Engineering" className={styles.input}/>
                </td>
              </tr>
            </table>
            <input
              type="button"
              value="Save"
              onClick={closeEditProfile}
              className={styles.saveButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
