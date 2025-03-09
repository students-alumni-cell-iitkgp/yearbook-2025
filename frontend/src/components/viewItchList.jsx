import { useState } from "react";
import "./trending.css";
import "./viewItchList.css";
import Navbar from "./Navbar";
import { FcOldTimeCamera } from "react-icons/fc";
import { MdDialpad } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { MdSportsVolleyball } from "react-icons/md";
import { GiLoveSong, GiLampreyMouth, GiBeerStein, GiCampfire } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";
import { FaRoad } from "react-icons/fa6";

function ViewItchList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all"); // 
  const postsPerPage = 25;
  
  const posts = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    author: { name: `User ${i + 1}` },
    caption: `This is post number ${i + 1}.`,
    comments: [],
  }));

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);
  
  // Get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  // const posts = [
  //   {
  //     id: 1,
  //     author: { name: "Nirmal Patidar" },
  //     category: "illu", // Illustration
  //   },
  //   {
  //     id: 2,
  //     author: { name: "John Doe" },
  //     category: "treak", // Trekking
  //   },
  //   {
  //     id: 3,
  //     author: { name: "Alice Smith" },



  //     category: "illu",
  //   },
  //   {
  //     id: 4,
  //     author: { name: "Michael Brown" },
  //     category: "22",
  //   },
  //   {
  //     id: 5,
  //     author: { name: "Emily Davis" },
  //     category: "illu",
  //   },
  // ];

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
          <button onClick={(e) => setSelectedCategory("all")} value="all"><div className={`category-itchlist-name ${selectedCategory=="all" ? "active-category" : ""}`}><MdDialpad />ALL</div></button>
          <button onClick={(e) => setSelectedCategory("22")} value="22"><div className={`category-itchlist-name ${selectedCategory=="22" ? "active-category" : ""}`}><FaRoad />2.2</div></button>
          <button onClick={(e) => setSelectedCategory("illu")} value="illu"><div className={`category-itchlist-name ${selectedCategory=="illu" ? "active-category" : ""}`}><GiLampreyMouth />ILLU</div></button>
          <button onClick={(e) => setSelectedCategory("holi")} value="holi"><div className={`category-itchlist-name ${selectedCategory=="holi" ? "active-category" : ""}`}><IoColorPaletteSharp />HOLI</div></button>
          <button onClick={(e) => setSelectedCategory("treat")} value="treat"><div className={`category-itchlist-name ${selectedCategory=="treat" ? "active-category" : ""}`}><GiBeerStein />TREAT</div></button>
          <button onClick={(e) => setSelectedCategory("bonfire")} value="bonfire"><div className={`category-itchlist-name ${selectedCategory=="bonfire" ? "active-category" : ""}`}><GiCampfire />BONFIRE</div></button>
          <button onClick={(e) => setSelectedCategory("gc")} value="gc"><div className={`category-itchlist-name ${selectedCategory=="gc" ? "active-category" : ""}`}><MdSportsVolleyball />G.C.</div></button>
          <button onClick={(e) => setSelectedCategory("trek")} value="trek"><div className={`category-itchlist-name ${selectedCategory=="trek" ? "active-category" : ""}`}><TbTrekking />TREK</div></button>
          <button onClick={(e) => setSelectedCategory("hall_day")} value="hall_day"><div className={`category-itchlist-name ${selectedCategory=="hall_day" ? "active-category" : ""}`}><BsBuildingsFill />HALL DAY</div></button>
          <button onClick={(e) => setSelectedCategory("prom")} value="prom"><div className={`category-itchlist-name ${selectedCategory=="prom" ? "active-category" : ""}`}><GiLoveSong />PROM</div></button>
          <button onClick={(e) => setSelectedCategory("beach_trip")} value="beach_trip"><div className={`category-itchlist-name ${selectedCategory=="beach_trip" ? "active-category" : ""}`}><LuWaves />BEACH TRIP</div></button>
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
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default ViewItchList;
