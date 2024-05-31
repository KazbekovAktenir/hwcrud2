import React, { useState } from "react";

const LikeButton = ({ postId, initialLiked, onLike }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLikeClick = () => {
    setLiked(!liked);
    onLike(postId, !liked);
  };

  return (
    <button onClick={handleLikeClick}>
      {liked ? <span>&#x2665;</span> : <span>&#x2661;</span>}
    </button>
  );
};

export default LikeButton;
