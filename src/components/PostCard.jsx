import React from "react";
import { API } from "../helpers/count";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PostCard = ({ postBody, postAuthor, postImage, id, getPosts }) => {
  const deletePost = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    getPosts();
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <span className="author-name">{postAuthor}</span>
      </div>
      <div className="post-content">
        <img className="post-image" src={postImage} />
        <p className="post-text">{postBody}</p>
      </div>
      <div className="post-actions">
        <button
          onClick={() => deletePost(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link to={`/edit/${id}`}>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
