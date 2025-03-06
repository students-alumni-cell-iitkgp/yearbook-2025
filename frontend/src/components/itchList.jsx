import React, { useState } from "react";
import "./itchList.css";
import "./trending.css";

const ItchListPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState("ILLU"); // Default selection

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const items = [
    "2.2", "ILLU", "HOLI", "TREAT", "BEACH TRIP", 
    "BONFIRE", "G.C.", "TREK", "HALL DAY", "PROM"
  ];

  // Dummy images for each item (Replace with actual image paths)
  const images = {
    "2.2": "images/2.2.jpg",
    "ILLU": "images/illu.jpg",
    "HOLI": "images/holi.jpg",
    "TREAT": "images/treat.jpg",
    "BEACH TRIP": "images/beach_trip.jpg",
    "BONFIRE": "images/bonfire.jpg",
    "G.C.": "images/gc.jpg",
    "TREK": "images/trek.jpg",
    "HALL DAY": "images/hall_day.jpg",
    "PROM": "images/prom.jpg",
  };

  return (
    <div className="main-body">
      <div className="content">
        <div className="itch-list-container">
          
          <div className="itch-list-row">
            <div>
            {items.map((item, index) => (
              <button
                key={index}
                className={`itch-button ${item === selectedItem ? "active" : ""}`}
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
            <div className="itch-image">
              <img src={images[selectedItem]} alt={selectedItem} className="itch-image" />
            </div>
            <div className="upload-section">
              <label className="upload-label">Choose Photo</label>
              <input
                className="upload-select"
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
              <button className="upload-button">Upload Photo</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItchListPage;
