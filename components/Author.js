import React from "react";

export default function Author() {
  return (
    <div className="bio text-center">
      <img
        src="https://picsum.photos/200/200"
        alt="Image Placeholder"
        className="img-fluid mb-5"
      />
      <div className="bio-body">
        <h2>Craig David</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem facilis sunt repellendus excepturi beatae porro debitis
          voluptate nulla quo veniam fuga sit molestias minus.
        </p>
        <p>
          <a href="#" className="btn btn-primary btn-sm rounded px-4 py-2">
            Read my bio
          </a>
        </p>
        <p className="social">
          <a href="#" className="p-2">
            <span className="fa fa-facebook"></span>
          </a>
          <a href="#" className="p-2">
            <span className="fa fa-twitter"></span>
          </a>
          <a href="#" className="p-2">
            <span className="fa fa-instagram"></span>
          </a>
          <a href="#" className="p-2">
            <span className="fa fa-youtube-play"></span>
          </a>
        </p>
      </div>
    </div>
  );
}
