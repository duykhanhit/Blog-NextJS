import React from "react";
import Category from "./Category";

export default function ListCategory() {
  return (
    <div>
      <h3 className="heading">Categories</h3>
      <ul className="categories">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </ul>
    </div>
  );
}
