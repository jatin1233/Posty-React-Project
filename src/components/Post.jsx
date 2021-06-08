import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";

function Post(props) {
  const posts = useSelector((state) => state.posts);
  const postDetail = posts.filter(
    (post) => post.id == props.match.params.postId
  )[0];
  console.log(postDetail);

  const renderPost = () => {
    return (
      <Jumbotron
        style={{
          border: "2px #0d6efd solid",
          width: "600px",
          margin: "auto",
          padding: 20,
        }}
        key={postDetail.id}
      >
        <h1>{postDetail.title}</h1>
        <p>{postDetail.body}</p>
        <Button onClick={() => props.history.push(`/`)}>Go Back...</Button>
      </Jumbotron>
    );
  };

  return (
    <div>
      {postDetail && Object.keys(postDetail).length > 0 && renderPost()}
    </div>
  );
}

export default Post;
