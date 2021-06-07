import React from "react";
import { useSelector } from "react-redux";

function Post() {
  const postDetail = useSelector((state) => state.selectedPost);
  console.log(postDetail);

  return (
    <div>
      <h1>Hey this is Post</h1>
    </div>
  );
}

export default Post;
