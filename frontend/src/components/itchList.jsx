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
  const [user, setUser] = useState(null); // Store user data

  // Fetch user data when component mounts
  useEffect(() => {
    handleUser();
  }, []);

  // Fetch user details
  const handleUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found! Please log in.");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:5000/api/users/getuser",
        config
      );
      setUser(response.data);

      // Fetch user's uploaded itches
      fetchUserItches(response.data._id);
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("Invalid Credentials");
    }
  };

  // Fetch user's uploaded itches
  const fetchUserItches = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/itchlist/user/${userId}`
      );
      setItches(response.data);
    } catch (error) {
      console.error("Error fetching user's itches:", error);
    }
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file.");

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found! Please log in again.");
      return;
    }

    if (!user || !user._id || !user.rollno || !user.name) {
      alert("User information is missing. Please refresh and try again.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("user_id", user._id);
    formData.append("rollno", user.rollno);
    formData.append("user_name", user.name); // ✅ Include user_name
    formData.append("type", selectedItem);

    try {
      await axios.post("http://localhost:5000/api/itchlist/newitch", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setSelectedFile(null);
      alert("Photo uploaded successfully! ✅");

      // Refresh the user's itches list
      fetchUserItches(user._id);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed! ❌ Please try again.");
    } finally {
      setUploading(false);
    }
  };

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

  return (
    <>
      <Navbar />
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
                  name="image"
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
                {itches.length > 0 ? (
                  itches
                    .filter((itch) => itch.type === selectedItem) // Filter by selected category
                    .map((itch, index) => (
                      <div key={index} className="itch-item">
                        <img
                          src={`http://localhost:5000${itch.photo_url}`}
                          alt="Uploaded"
                        />
                        <p>{itch.user_name}</p>
                      </div>
                    ))
                ) : (
                  <p>No images uploaded yet for {selectedItem}.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItchListPage;
