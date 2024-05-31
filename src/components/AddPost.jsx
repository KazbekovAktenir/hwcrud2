import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/count";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddPost.css";

const AddPost = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!body || !author || !image) {
      alert("Введите данные");
      return;
    }
    let newPost = {
      postBody: body,
      postAuthor: author,
      postImage: image,
    };
    await addPost(newPost);

    setBody("");
    setAuthor("");
    setImage("");
    navigate("/posts");
  };

  const addPost = async (post) => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>НедоINSTAGRAM POST</h1>
        <div>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Введите имя пользователя"
            value={author}
          />
          <br />
          <input
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Введите текст"
            value={body}
          />
          <br />
          <input
            onChange={(e) => setImage(e.target.value)}
            type="url"
            placeholder="Вставьте ссылку на фото"
            value={image}
          />
          <br />
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-success"
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
