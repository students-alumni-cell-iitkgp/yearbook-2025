import React, { useState, useEffect } from "react";
import axios from "axios";
import "./itchList.css";
import "./trending.css";
import Navbar from "./Navbar";

const ItchListPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState("2.2"); // Default selection
  const [itches, setItches] = useState([]); // Store fetched posts
  const [uploading, setUploading] = useState(false); // Track upload status

  // Fetch posts on component mount and when selectedItem changes
  useEffect(() => {
    fetchItches();
  }, [selectedItem]);

  const fetchItches = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/itchlist/getitch?type=${selectedItem}`
      );
      setItches(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file.");

    setUploading(true); // Show loading state

    const formData = new FormData();
    formData.append("image", selectedFile); // Ensure it matches backend field
    formData.append("user_id", "12345");
    formData.append("user_name", "John Doe");
    formData.append("type", selectedItem);

    try {
      await axios.post("http://localhost:5000/api/itchlist/newitch", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSelectedFile(null); // Reset file selection
      fetchItches(); // Refresh images

      alert("Photo uploaded successfully! ✅"); // Alert after successful upload
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed! ❌ Please try again.");
    } finally {
      setUploading(false); // Hide loading state
    }
  }
  const items = [
    "2.2",
    "ILLU",
    "HOLI", 
    "TREAT",
    "BEACH TRIP", 
    "BONFIRE", 
    "G.C.", 
    "TREK", 
    "HALL DAY", 
    "PROM",
  ];

  // Dummy images for each item (Replace with actual image paths)
  const images = {
    "2.2": "../../src/img/itch/22.jpg",
    "ILLU": "../../src/img/itch/illu.jpg",
    "HOLI": "../../src/img/itch/holi.jpg",
    "TREAT": "../../src/img/itch/treat.jpg",
    "BONFIRE": "../../src/img/itch/bonfire.jpg",
    "G.C.": "../../src/img/itch/gc.jpg",
    "TREK": "../../src/img/itch/trek.jpg",
    "HALL DAY": "../../src/img/itch/hall_day.jpg",
    "PROM": "../../src/img/itch/prom.jpg",
    "BEACH TRIP": "../../src/img/itch/beach_trip.jpg",
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="main-body">
      <div className="content">
        <div className="itch-list-container">
          <div className="itch-list-row">
            <div>
              {items.map((item, index) => (
                <button
                  key={index}
                  className={`itch-button ${
                    item === selectedItem ? "active" : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Itch List Card - Dynamic Content */}
          <div className="itch-card">
            <h2 className="itch-title">{selectedItem}</h2>
            <div className="upload-section">
              <label className="upload-label">Choose Photo</label>
              <input
                className="upload-select"
                name = "image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
              <button
                className="upload-button"
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Photo"}
              </button>
            </div>

            {/* Display Uploaded Photos */}
            <div className="itch-gallery">
              {itches.map((itch, index) => (
                <div key={index} className="itch-item">
                  <img
                    src={`http://localhost:5000${itch.photo_url}`}
                    alt="Uploaded"
                  />
                  <p>{itch.user_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default ItchListPage;
