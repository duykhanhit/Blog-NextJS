import React from "react";
import Tag from "./Tag";

export default function ListTag() {
  return (
    <div>
      <h3 className="heading">Tags</h3>
      <ul className="tags">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </ul>
    </div>
  );
}
