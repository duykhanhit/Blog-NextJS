import React from "react";

export default function FormComment() {
  return (
    <div>
      <h3 className="mb-5">Leave a comment</h3>
      <form action="#" className="p-5 bg-light">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="url" className="form-control" id="website" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Post Comment"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
