import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostListing from "./components/PostListing";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PostListing />} />
      <Route path="/post/:index" element={<PostDetail />} />
    </Routes>
  );
}
