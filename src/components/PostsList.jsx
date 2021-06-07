import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/actions/postsActions";
import PostsComponent from "./PostsComponent";

const PostsList = () => {
  const dispatch = useDispatch();

  const getPosts = async () => {
    setTimeout(async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
        .catch((err) => {
          console.log("Err", err);
        });
      console.log(response.data);
      dispatch(setPosts(response.data));
    }, 100);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <PostsComponent />
    </div>
  );
};

export default PostsList;
