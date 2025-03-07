import { useState } from "react";
import "./trending.css"; // Ensure correct CSS file import

function TrendingPost({ post }) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, author: "You" }]);
      setNewComment("");
    }
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <center>

      <div className="post">
      <div className="post-header">
        <div className="profile-pic"><img src="../../src/img/profilepic_test2.jpg" alt="profile" /></div>
        <span className="author">{post.author.name}</span>
      </div>

      <div className="post-content">
        <div className="post-image">
          <img src="../../src/img/post_test.jpg" alt="post" />
          </div>
        <p className="caption">{post.caption}</p>
      </div>

      <div className="post-actions">
        <button  style={{ outline: 'none' }} className={liked ? "liked" : ""} onClick={handleLikeClick} >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0711 18.1421L18.4142 23.799C17.6332 24.58 16.3668 24.58 15.5858 23.799L9.92894 18.1421C7.97632 16.1895 7.97632 13.0237 9.92894 11.071C11.8816 9.11841 15.0474 9.11841 17 11.071" stroke="#A5D7E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0709 18.1421C26.0236 16.1895 26.0236 13.0237 24.0709 11.071C22.1183 9.11841 18.9525 9.11841 16.9999 11.071" stroke="#A5D7E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{likeCount}
        </button>
        <button  style={{ outline: 'none' }} onClick={handleCommentClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_317_497)">
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="#A5D7E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="12" y="12" width="0.01" height="0.01" stroke="#A5D7E8" stroke-width="3" stroke-linejoin="round"/>
<rect x="7.5" y="12" width="0.01" height="0.01" stroke="#A5D7E8" stroke-width="3" stroke-linejoin="round"/>
<rect x="16.5" y="12" width="0.01" height="0.01" stroke="#A5D7E8" stroke-width="3" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_317_497">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
      </div>

      {showCommentInput && (
        <div className="comment-section">
          <div className="profile-pic small"></div>
          <input
            type="text"
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="post-btn" onClick={handlePostComment}>
            Post Comment
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="profile-pic small"><img src="../../src/img/profilepic_test2.jpg" alt="" /></div>
                <span className="comment-author">{comment.author}</span>{" "}
                <span className="comment-text">
                  {comment.text}
                  </span>
            </div>
          ))}
        </div>
      )}
    </div>
    </center>
  );
}

export default TrendingPost;
