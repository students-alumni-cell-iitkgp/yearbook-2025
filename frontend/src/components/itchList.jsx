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
    "2.2": "../..src/img/itch/22.jpg",
    "ILLU": "../..src/img/itch/illu.jpg",
    "HOLI": "../..src/img/itch/holi.jpg",
    "TREAT": "../..src/img/itch/treat.jpg",
    "BEACH TRIP": "../..src/img/itch/beach_trip.jpg",
    "BONFIRE": "../..src/img/itch/bonfire.jpg",
    "G.C.": "../..src/img/itch/gc.jpg",
    "TREK": "../..src/img/itch/trek.jpg",
    "HALL DAY": "../..src/img/itch/hall_day.jpg",
    "PROM": "../..src/img/itch/prom.jpg",
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
