import React from "react";
import PopularPost from "./PopularPost";

export default function ListPopularPost() {
  return (
    <div>
      <h3 className="heading">Popular Posts</h3>
      <div className="post-entry-sidebar">
        <ul>
          <PopularPost />
          <PopularPost />
          <PopularPost />
        </ul>
      </div>
    </div>
  );
}
