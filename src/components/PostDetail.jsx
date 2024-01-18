import React from "react";
import { PostListings } from "../utils";

export default function PostDetail({ index }) {
  const post = PostListings[index];

  return (
    <div>
      <h2 className="heading">{post.title}</h2>
      <div className="content-1 ">
      <p >{post.body}</p>
      </div>
      {/* Add other details as needed */}
    </div>
  );
}