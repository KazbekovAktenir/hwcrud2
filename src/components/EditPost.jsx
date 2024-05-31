import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/count";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPost = () => {
  const [onePost, setOnePost] = useState({});
  const { id } = useParams();
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const getPost = async (id) => {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();
    setOnePost(data);
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  useEffect(() => {
    setBody(onePost.postBody || "");
    setAuthor(onePost.postAuthor || "");
    setImage(onePost.postImage || "");
  }, [onePost]);

  const handleClick = async () => {
    if (!body || !author || !image) {
      alert("Заполните данные");
      return;
    }
    let editedPost = {
      postBody: body,
      postAuthor: author,
      postImage: image,
    };
    await editPost(id, editedPost);
    navigate("/posts");
  };

  const editPost = async (id, post) => {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <div className="edit-post-container">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Введите автора"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Введите текст"
      />

      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Вставьте ссылку на фото"
      />
      <button onClick={handleClick} type="button" className="btn btn-info">
        Save
      </button>
    </div>
  );
};

export default EditPost;
