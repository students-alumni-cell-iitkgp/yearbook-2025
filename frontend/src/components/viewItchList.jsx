import { useState } from "react";
import "./trending.css";
import "./viewItchList.css";
import Navbar from "./Navbar";

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
      category: "22",
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
    <>
    <Navbar></Navbar>
    <div className="main-body">
      <div className="content">
        
        {/* Filter Dropdown */}
        <div className="filter-container">
          <label htmlFor="category-filter"></label>
          <button onClick={(e) => setSelectedCategory("all")} value="all"><div className={`category-itchlist-name ${selectedCategory=="all" ? "active-category" : ""}`}>ALL</div></button>
          <button onClick={(e) => setSelectedCategory("22")} value="22"><div className={`category-itchlist-name ${selectedCategory=="22" ? "active-category" : ""}`}>2.2</div></button>
          <button onClick={(e) => setSelectedCategory("illu")} value="illu"><div className={`category-itchlist-name ${selectedCategory=="illu" ? "active-category" : ""}`}>ILLU</div></button>
          <button onClick={(e) => setSelectedCategory("holi")} value="holi"><div className={`category-itchlist-name ${selectedCategory=="holi" ? "active-category" : ""}`}>HOLI</div></button>
          <button onClick={(e) => setSelectedCategory("treat")} value="treat"><div className={`category-itchlist-name ${selectedCategory=="treat" ? "active-category" : ""}`}>TREAT</div></button>
          <button onClick={(e) => setSelectedCategory("bonfire")} value="bonfire">
            <div className={`category-itchlist-name ${selectedCategory=="bonfire" ? "active-category" : ""}`}>BONFIRE</div></button>
          <button onClick={(e) => setSelectedCategory("gc")} value="gc"><div className={`category-itchlist-name ${selectedCategory=="gc" ? "active-category" : ""}`}>G.C.</div></button>
          <button onClick={(e) => setSelectedCategory("trek")} value="trek"><div className={`category-itchlist-name ${selectedCategory=="trek" ? "active-category" : ""}`}>TREK</div></button>
          <button onClick={(e) => setSelectedCategory("hall_day")} value="hall_day"><div className={`category-itchlist-name ${selectedCategory=="hall_day" ? "active-category" : ""}`}>HALL DAY</div></button>
          <button onClick={(e) => setSelectedCategory("prom")} value="prom"><div className={`category-itchlist-name ${selectedCategory=="prom" ? "active-category" : ""}`}>PROM</div></button>
          <button onClick={(e) => setSelectedCategory("beach_trip")} value="beach_trip"><div className={`category-itchlist-name ${selectedCategory=="beach_trip" ? "active-category" : ""}`}>BEACH TRIP</div></button>
        </div>

        <div className="itch-container">
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
    </>
  );
}

export default ViewItchList;
