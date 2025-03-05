import { useState } from "react";
import "./trending.css"; // Ensure correct CSS file import
import TrendingPost from "./trendingpost";

function Trending() {
  const [posts] = useState([
    {
      id: 1,
      author: { name: "Nirmal Patidar" },
      caption:
        "Caption of the photo. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame",
      comments: [],
    },
    {
      id: 2,
      author: { name: "John Doe" },
      caption: "This is another post.",
      comments: [],
    },
  ]);

  return (
    <div className="main-body">
      <div className="content">
    <div className="trending-container">
      {posts.map((post) => (
        <TrendingPost post={post} />
      ))}
    </div>
    </div>
    </div>
  );
}


export default Trending;
