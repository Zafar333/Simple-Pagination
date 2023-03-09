import React from "react";
import { Button } from "react-bootstrap";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <ul className="list-group mb-4 m-4">
        {posts.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
