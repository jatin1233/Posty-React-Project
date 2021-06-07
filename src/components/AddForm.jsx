import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postsActions";
import "bootstrap/dist/css/bootstrap.min.css";

const AddForm = ({ title = "", body = "" }) => {
  const [formtitle, setFormtitle] = useState("");
  const [formbody, setFormbody] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost({ formtitle, formbody }));
  };

  return (
    <div>
      <Container className="border border-success" style={{ maxWidth: 500 }}>
        <h1>Create A New Post!</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Title of the Post"
              defaultValue={title}
              onChange={(e) => setFormtitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              rows={4}
              placeholder="Surprise US!!!"
              defaultValue={body}
              onChange={(e) => setFormbody(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            type="submit"
            variant="secondary"
            style={{ margin: "10px 0" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddForm;
