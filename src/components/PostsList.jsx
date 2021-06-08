import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postsActions";
import PostsComponent from "./PostsComponent";

const PostsList = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
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
    if (!posts) {
      getPosts();
    }
  }, []);

  return (
    <div>
      <PostsComponent {...props} />
    </div>
  );
};

export default PostsList;
