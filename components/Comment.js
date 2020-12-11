import React from "react";

export default function Comment() {
  return (
    <div>
      <div className="vcard">
        <img src="https://picsum.photos/200/200" alt="Image placeholder" />
      </div>
      <div className="comment-body">
        <h3>Jean Doe</h3>
        <div className="meta">January 9, 2018 at 2:21pm</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?
        </p>
        <p>
          <a href="#" className="reply rounded">
            Reply
          </a>
        </p>
      </div>
    </div>
  );
}
