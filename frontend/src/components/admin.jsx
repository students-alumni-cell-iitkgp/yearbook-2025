import React, { useState } from "react";
import "./admin.css"; // Import the CSS file
import Navbar from "./Navbar";

const profiles = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  name: `Nirmal Patidar ${i + 1}`,
  rollNumber: `23XX10${i + 1}`,
  hall: "Azad Hall of Residence",
  department: "Agricultural and Food Engineering",
}));

const ITEMS_PER_PAGE = 18;

const ProfileCard = ({ profile }) => (

  <div className="profile-card">
    <div className="profile-pic-admin" ><img src="../../src/img/proifl,epic_test.jpg" alt="" /></div>
    <div className="info-admin-page">
    <a href="/profile"><h2 className="name">{profile.name}</h2></a>
    <p className="info">{profile.rollNumber}</p>
    <p className="info">{profile.hall}</p>
    <p className="info">{profile.department}</p>
    </div>
  </div>
);

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(profiles.length / ITEMS_PER_PAGE);
  const currentProfiles = profiles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
    <Navbar></ Navbar>
    <div className="main-body">
    <div className="content">
      <div className="profile-grid">
        {currentProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="page-btn">Prev</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="page-btn">Next</button>
      </div>
    </div>
        
      </div>
    </>
  );
};

export default AdminPage;
