import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./Body.module.css";
import photo from "../photos/Rupesh.1.jpg";
import { PiMedalDuotone } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { BsBuilding } from "react-icons/bs";
import photo1 from "../photos/basic-rgb-265998273.webp";
const Profile = () => {
  const superContainerRef = useRef(null);
  const containerRef = useRef(null);
  const tableRef=useRef(null);
  const inputFile=useRef(null);
  const [isVisible, setisvisible] = useState(false);
  const [blur, setblur] = useState(0);
  const table1=tableRef.current;
  
  const Edit = () => {
    setisvisible(true);
    setblur(10);
    table1.classList.add('styles.show')
    console.log(table1.classList);
    
  };
  console.log(inputFile.current)
  const editClose = () => {
    setisvisible(false);
    setblur(0);
    table1.classList.remove('styles.show')
    
  };
  useEffect(() => {
    const super_container=superContainerRef.current;
    const container=superContainerRef.current;
    console.log(container);
    

  });
  return (
    <div className={styles.super_container} ref={superContainerRef} style={{transition:'2s all ease'}}>
      
      {
        isVisible &&
      <>
      
      <table className={styles.table} style={{transition:'4s all ease'}} ref={tableRef}>
      <RxCross2 style={{color:'white', float:'right',position:'relative',left:'370px',cursor:'pointer'}} size={26} onClick={editClose}
      ></RxCross2>
        <h3>Edit Profile</h3>
        <tr>
          <td>Change Profile Picture : </td>
          <td><input type="file"   ref={inputFile}/><span></span></td>
        </tr>
        <tr>
          <td>Caption : </td>
          <td><input type="text" placeholder="Upload your Caption Here." /></td>
        </tr>
        <tr>
          <td>Roll No. : </td>
          <td><input type="text" placeholder="23XX10058" /></td>
        </tr>
        <tr>
          <td>Hall of Residence : </td>
          <td><input type="text" placeholder="RadhaKrishnan" /></td>
        </tr>
        <tr>
          <td>Email : </td>
          <td><input type="email" placeholder="rsahoo@gmail.com" /></td>
        </tr>
        <tr>
          <td>Department : </td>
          <td><input type="text" placeholder="Electrical Engineering" /></td>
        </tr>
        <input type="button" value="Save" onClick={editClose}/>
      </table>
      </>
    }

      <div className={styles.container} style={{filter:`blur(${blur}px)`}} ref={containerRef}>
        <div className={styles.photo}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.caption}>
            <h2>Rupesh Sahoo</h2>
            <h3>Your Caption Here! </h3>
          </div>
          <div className={styles.bio}>
            <h3>Introduction</h3>
            <p>
              <span>
                <span>
                  <PiMedalDuotone></PiMedalDuotone>
                </span>
                Roll No :{" "}
                <b
                  style={{
                    color: "rgb(148,148,148)",
                    fontFamily: "sans-serif",
                  }}
                >
                  23EE10058
                </b>
              </span>
            </p>

            <p>
              <span>
                <span>
                  <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                </span>
                Hall of Residence :{" "}
                <b
                  style={{
                    color: "rgb(148,148,148)",
                    fontFamily: "sans-serif",
                  }}
                >
                  Radhakrishnan
                </b>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <CiMail></CiMail>
                </span>
                Email :{" "}
                <b
                  style={{
                    color: "rgb(148,148,148)",
                    fontFamily: "sans-serif",
                  }}
                >
                  rsahoo123@gmail.com
                </b>
              </span>
            </p>
            <p>
              <span>
                <span>
                  <BsBuilding></BsBuilding>
                </span>
                Department :{" "}
                <b
                  style={{
                    color: "rgb(148,148,148)",
                    fontFamily: "sans-serif",
                  }}
                >
                  rsahoo123@gmail.com
                </b>
              </span>
            </p>
            <input type="button" value="Edit Profile" onClick={Edit} />
          </div>
        </div>
      </div>
      <h4 style={{filter:`blur(${blur}px)`}}>
        Here's what your friends written about you! Your testimonials are
        displayed below. You can approve and disapprove them by selecting the
        option beside each testimonial. The approved ones shall be a part of
        your yearbook.
      </h4>
      <div className={styles.triple_option} style={{filter:`blur(${blur}px)`}}>
        <p>Gallery</p>
        <p>Testimonials</p>
        <p>Articles</p>
      </div>
    </div>
  );
};

export default Profile;
