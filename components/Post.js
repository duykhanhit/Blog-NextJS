import Link from "next/link";
import React from "react";

export default function Post() {
  return (
    <div className="col-lg-4 mb-4">
      <div className="entry2">
        <Link href="/view/abc-test">
          <a>
            <img
              src="https://picsum.photos/400/200"
              alt="Image"
              className="img-fluid rounded"
            />
          </a>
        </Link>

        <div className="excerpt">
          <span className="post-category text-white bg-warning mb-3">
            Travel
          </span>
          <h2>
            <Link href="/view/abc-test">
              <a>The AI magically removes moving objects from videos.</a>
            </Link>
          </h2>
          <div className="post-meta align-items-center text-left clearfix">
            <figure className="author-figure mb-0 mr-3 float-left">
              <img
                src="https://picsum.photos/50"
                alt="Image"
                className="img-fluid"
              />
            </figure>
            <span className="d-inline-block mt-1">
              By <a href="#">Carrol Atkinson</a>
            </span>
            <span>&nbsp;-&nbsp; July 19, 2019</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt
            tempora dolor laudantium sed optio, explicabo ad deleniti impedit
            facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id
            est.
          </p>
          <p>
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
