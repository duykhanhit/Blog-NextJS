import React from "react";
import Comment from "./Comment";
import FormComment from "./FormComment";

export default function ListComment() {
  return (
    <div>
      <h3 className="mb-5">2 Comments</h3>
      <ul className="comment-list">
        <li className="comment">
          <Comment />
        </li>

        {/* <li className="comment">
          <Comment />

          <ul className="children">
            <li className="comment">
              <Comment />

              <ul className="children">
                <li className="comment">
                  <Comment />

                  <ul className="children">
                    <li className="comment">
                      <Comment />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}

        <li className="comment">
          <Comment />
        </li>
      </ul>

      <div className="comment-form-wrap pt-5">
        <FormComment />
      </div>
    </div>
  );
}
