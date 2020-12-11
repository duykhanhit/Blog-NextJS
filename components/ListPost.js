import React from "react";
import Post from "./Post";

export default function ListPost() {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-12">
          <h2>Bài viết mới</h2>
        </div>
      </div>
      <div className="row">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
