import React, { useState } from "react";
import "./givenTestimonial.css"; // Importing normal CSS file
import "./trending.css"

const TestimonialGiven = () => {
  
  const [testimonials] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      profilePic: "../../src/img/profilepic_test2.jpg",
      testimonial: "This platform has changed my life for the better! Highly recommended."
    },
    {
      id: 2,
      name: "Bob Smith",
      profilePic: "../../src/img/profilepic_test2.jpg",
      testimonial: "An amazing experience! The best service I have ever used."
    },
    {
      id: 3,
      name: "Charlie Brown",
      profilePic: "../../src/img/profilepic_test2.jpg",
      testimonial: "User-friendly and efficient. I am extremely satisfied."
    }
  ]);

  return (
    <div className="main-body">
    <div className="content">
    {isVisible && (
            <div>
                      <div className="testimonial-container">
                          {testimonials.map((user) => (
                              <div className="testimonials">
                                <div className="profile-pic small">
                                  <img src={user.profilePic} alt={user.name} className="profile-pic" />
                                  </div>
                                  <span className="comment-author">{user.name}</span>{" "}
                                  <span className="comment-text">
                                  {user.testimonial}
                                    </span>
                              </div>
                            ))}
                            </div>
            </div>
          )}


    </div>
    </div>
  );
};

export default TestimonialGiven;