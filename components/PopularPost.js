import React from "react";

export default function PopularPost() {
  return (
    <li>
      <a href="">
        <img
          src="https://picsum.photos/400/200"
          alt="Image placeholder"
          className="mr-4"
        />
        <div className="text">
          <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
          <div className="post-meta">
            <span className="mr-2">March 15, 2018 </span>
          </div>
        </div>
      </a>
    </li>
  );
}
