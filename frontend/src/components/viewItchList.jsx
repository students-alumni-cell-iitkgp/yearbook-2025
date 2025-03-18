import { useState, useEffect } from "react";
import axios from "axios";
import "./trending.css";
import "./viewItchList.css";
import Navbar from "./Navbar";
import { MdDialpad, MdSportsVolleyball } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { GiLoveSong, GiBeerStein, GiCampfire } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";
import { FaRoad } from "react-icons/fa6";

function ViewItchList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const postsPerPage = 25;

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]); // Fetch posts when category changes

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/itchlist/getitch?type=${selectedCategory}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.type === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Navbar />
      <div className="main-body">
        <div className="content">
          {/* Filter Buttons */}
          <div className="filter-container">
            <button
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "active-category" : ""}
            >
              <MdDialpad />
              ALL
            </button>
            <button
              onClick={() => setSelectedCategory("2.2")}
              className={selectedCategory === "2.2" ? "active-category" : ""}
            >
              <FaRoad />
              2.2
            </button>
            <button
              onClick={() => setSelectedCategory("illu")}
              className={selectedCategory === "illu" ? "active-category" : ""}
            >
              <IoColorPaletteSharp />
              ILLU
            </button>
            <button
              onClick={() => setSelectedCategory("holi")}
              className={selectedCategory === "holi" ? "active-category" : ""}
            >
              <IoColorPaletteSharp />
              HOLI
            </button>
            <button
              onClick={() => setSelectedCategory("treat")}
              className={selectedCategory === "treat" ? "active-category" : ""}
            >
              <GiBeerStein />
              TREAT
            </button>
            <button
              onClick={() => setSelectedCategory("bonfire")}
              className={
                selectedCategory === "bonfire" ? "active-category" : ""
              }
            >
              <GiCampfire />
              BONFIRE
            </button>
            <button
              onClick={() => setSelectedCategory("gc")}
              className={selectedCategory === "gc" ? "active-category" : ""}
            >
              <MdSportsVolleyball />
              G.C.
            </button>
            <button
              onClick={() => setSelectedCategory("trek")}
              className={selectedCategory === "trek" ? "active-category" : ""}
            >
              <TbTrekking />
              TREK
            </button>
            <button
              onClick={() => setSelectedCategory("hall_day")}
              className={
                selectedCategory === "hall_day" ? "active-category" : ""
              }
            >
              <BsBuildingsFill />
              HALL DAY
            </button>
            <button
              onClick={() => setSelectedCategory("prom")}
              className={selectedCategory === "prom" ? "active-category" : ""}
            >
              <GiLoveSong />
              PROM
            </button>
            <button
              onClick={() => setSelectedCategory("beach_trip")}
              className={
                selectedCategory === "beach_trip" ? "active-category" : ""
              }
            >
              <LuWaves />
              BEACH TRIP
            </button>
          </div>

          {/* Display Posts */}
          <div className="itch-container">
            {currentPosts.length === 0 ? (
              <p>No posts available.</p>
            ) : (
              currentPosts.map((post) => (
                <div className="post" key={post._id}>
                  <div className="post-header">
                    <div className="profile-pic">
                      <img src="/img/profilepic_test2.jpg" alt="profile" />
                    </div>
                    <span className="author">{post.user_name}</span>
                  </div>

                  <div className="post-content">
                    <div className="post-image">
                      <img
                        src={`http://localhost:5000${post.photo_url}`}
                        alt="post"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewItchList;
