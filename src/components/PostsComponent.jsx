import React, { useEffect, useState } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/actions/postsActions";
import { showPost } from "../redux/actions/postsActions";

const PostsComponent = () => {
  const postData = useSelector((state) => state.posts);
  console.log(postData);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deletePost(id));
  };

  const showItem = (id) => {
    dispatch(showPost(id));
  };

  const renderPost = () => {
    return postData.map((post) => {
      const { id, title, body } = post;
      return (
        <Card
          className="border border-primary"
          style={{ margin: "20px auto", width: "25rem" }}
          key={id}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
            <Button
              variant="primary"
              style={{ margin: "0px 10px 0px 0px" }}
              onClick={() => showItem({ id })}
              href="/post/${id}"
            >
              Read More
            </Button>
            <Button style={{ margin: "0px 10px 0px 0px" }}>Edit Post</Button>
            <Button variant="primary" onClick={() => deleteItem(id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <Container>
      <CardColumns>
        {postData && postData.length > 0 && renderPost()}
        {postData && postData.length == 0 && "Loading"}
      </CardColumns>
    </Container>
  );
};

export default PostsComponent;
