import "./App.css";
import Pagination from "./components/Pagination";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import { Container } from "react-bootstrap";

function App() {
  const [posts, setposts] = useState([]);
  const [postPerPage, setpostPerPage] = useState(10);
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState([1]);

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setposts(res.data);
      setloading(false);
    };
    fetchPosts();
  }, []);
  //it is a base formula of pagination
  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  console.warn(indexofFirstPost);
  console.warn(indexofLastPost);
  const currentPost = posts.slice(indexofFirstPost, indexofLastPost);
  //it is a function of to get a number on which page you click it
  const paginate = (number) => {
    setcurrentPage(number);
  };
  return (
    <div className="conatine mt-5">
      <div className="text-primary mb-3 m-4 ">My Blog</div>
      <Posts posts={currentPost} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPage={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
