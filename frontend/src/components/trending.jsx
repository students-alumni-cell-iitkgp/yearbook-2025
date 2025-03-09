import { useState } from "react";
import "./trending.css"; // Ensure correct CSS file import
import TrendingPost from "./trendingpost";
import Navbar from "./Navbar";

function Trending() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 25;
  
  const posts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    author: { name: `User ${i + 1}` },
    caption: `This is post number lorem 
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius deleniti facilis illum dicta obcaecati vel dignissimos, amet similique esse temporibus a. Doloremque vero pariatur dignissimos reprehenderit nobis quasi ipsa dolorum!
    
    ${i + 1}.`,
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

  return (
    <>
      <Navbar />
      <div className="main-body">
        <div className="content">
          {/* Filter Dropdown */}
          <div className="filter-container">
            <label htmlFor="category-filter">Filter by category: </label>
            <select className="category-filter-trending" id="category-filter">
              <option value="TimeStamp">TimeStamp</option>
              <option value="Most Liked">Most Liked</option>
            </select>
          </div>
          <div className="trending-container">
            {currentPosts.map((post) => (
              <TrendingPost key={post.id} post={post} />
            ))}
          </div>
          {/* Pagination Bar */}
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
    </>
  );
}

export default Trending;