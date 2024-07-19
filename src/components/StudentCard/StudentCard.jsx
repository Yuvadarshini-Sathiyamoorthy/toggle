import React, { useState } from "react";
import "./StudentCard.css";
import Photo from "./image.jpg";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: YUVADARSHINI S</h2>
      <p className="details">Registration No: 212221230126</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Department: Artificial Intelligence and Data Science</p>
          <p>Email ID: mickeyoswald2003@gmail.com</p>
          <p>Father's Name: Sathiyamoorthy</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;