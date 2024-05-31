import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import EditPost from "../components/EditPost";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddPost />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/edit/:id" element={<EditPost />} />
    </Routes>
  );
};

export default MainRoutes;
export const API = "http://localhost:8000/posts";
