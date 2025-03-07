import { useState } from "react";
import "./trending.css";
import "./viewItchList.css";

function ViewItchList() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to 'all'
  
  const posts = [
    {
      id: 1,
      author: { name: "Nirmal Patidar" },
      category: "illu", // Illustration
    },
    {
      id: 2,
      author: { name: "John Doe" },
      category: "treak", // Trekking
    },
    {
      id: 3,
      author: { name: "Alice Smith" },
      category: "illu",
    },
    {
      id: 4,
      author: { name: "Michael Brown" },
      category: "treak",
    },
    {
      id: 5,
      author: { name: "Emily Davis" },
      category: "illu",
    },
  ];

  // Filtered posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="main-body">
      <div className="content">
        
        {/* Filter Dropdown */}
        <div className="filter-container">
          <label htmlFor="category-filter">Filter by category: </label>
          <select
            id="category-filter"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="all">View All</option>
            <option value="22">2.2</option>
            <option value="illu">ILLU</option>
            <option value="holi">HOLI</option>
            <option value="treat">TREAT</option>
            <option value="bonfire">BONFIRE</option>
            <option value="gc">G.C.</option>
            <option value="trek">TREK</option>
            <option value="hallday">HALL DAY</option>
            <option value="prom">PROM</option>
            <option value="beach">BEACH TRIP</option>
          </select>
        </div>

        <div className="trending-container">
          {filteredPosts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <div className="profile-pic">
                  <img src="../../src/img/profilepic_test2.jpg" alt="profile" />
                </div>
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
