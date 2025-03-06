import { useState } from "react";
import "./trending.css"; // Ensure correct CSS file import

function ViewItchList() {
  const [posts] = useState([
    {
      id: 1,
      author: { name: "Nirmal Patidar" },
    },
    {
      id: 2,
      author: { name: "John Doe" },
    },
    {
      id: 2,
      author: { name: "John Doe" },
    },{
      id: 2,
      author: { name: "John Doe" },
    },{
      id: 2,
      author: { name: "John Doe" },
    },
  ]);

  return (
    <div className="main-body">
      <div className="content">
    <div className="trending-container">
      {posts.map((post) => (
        <div className="post">
        <div className="post-header">
          <div className="profile-pic"><img src="../../src/img/profilepic_test2.jpg" alt="profile" /></div>
          <span className="author">{post.author.name}</span>
        </div>
  
        <div className="post-content">
          <div className="post-image">
            <img src="../../src/img/post_test.jpg" alt="post" />
            </div>
        </div>
  
  
      </div>
      ))}
    </div>
    </div>
    </div>
  );
}


export default ViewItchList;
