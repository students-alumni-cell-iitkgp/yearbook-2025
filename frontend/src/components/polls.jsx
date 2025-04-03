import { useState, useEffect } from "react";
import { BsBarChartLine } from "react-icons/bs";
import "./polls.css";
import "./trending.css";
import Navbar from "./Navbar";

function Polls() {
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState({});
  const [animation, setAnimation] = useState({});

  // Example poll options - in a real app, you would fetch these from a database
  const pollOptions = [
    { id: 1, title: "Gian of the Batch" },
    { id: 2, title: "Most Likely to Succeed" },
    { id: 3, title: "Best Dressed" },
    { id: 4, title: "Class Clown" },
    { id: 5, title: "Most Athletic" },
    { id: 6, title: "Most Artistic" },
    { id: 7, title: "Most Likely to be Famous" },
    { id: 8, title: "Best Smile" }
  ];

  // Add animation when component mounts
  useEffect(() => {
    const animationDelays = {};
    pollOptions.forEach((option, index) => {
      animationDelays[option.id] = { delay: index * 100 };
    });
    setAnimation(animationDelays);
  }, []);

  const handleSubmit = (id, event) => {
    event.preventDefault();
    
    // Get the input value
    const form = event.target;
    const inputField = form.querySelector('.input_field');
    const value = inputField.value.trim();
    
    if (value) {
      // Set submitted state for this option
      setSubmitted(prev => ({
        ...prev,
        [id]: value
      }));
      
      // Clear the input field
      inputField.value = '';
      
      // Trigger success animation
      const optionElement = event.target.closest('.option');
      optionElement.classList.add('submit-success');
      
      // Remove animation class after animation completes
      setTimeout(() => {
        optionElement.classList.remove('submit-success');
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-body">
        <div className="content">
          <h3 className="header animate-title">Yearbook Polls</h3>
          <p className="polls-description">Vote for your classmates in the categories below. Results will be published in the yearbook.</p>
          
          <div className="poll_container">
            {pollOptions.map((option) => (
              <div 
                key={option.id} 
                className="option" 
                style={{
                  animationDelay: `${animation[option.id]?.delay || 0}ms`
                }}
              >
                <div className="info">
                  <span className="icon">
                    <BsBarChartLine size={22} />
                  </span>
                  <span className="name">
                    <h4>{option.title}</h4>
                  </span>
                </div>
                
                {submitted[option.id] ? (
                  <div className="submission-result">
                    <p>You voted for: <strong>{submitted[option.id]}</strong></p>
                    <button 
                      className="change_vote_btn"
                      onClick={() => setSubmitted(prev => {
                        const newState = {...prev};
                        delete newState[option.id];
                        return newState;
                      })}
                    >
                      Change Vote
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(option.id, e)} className="input_container">
                    <input
                      type="text"
                      className="input_field"
                      placeholder="Select Your Friend"
                    />
                    <button type="submit" className="submit_btn">Submit</button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Polls;