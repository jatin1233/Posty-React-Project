import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost } from "../redux/actions/postsActions";
import "bootstrap/dist/css/bootstrap.min.css";

const AddForm = ({ history, match }) => {
  const [formTitle, setFormtitle] = useState("");
  const [formBody, setFormbody] = useState("");

  const posts = useSelector((state) => state.posts);
  const id = parseInt(match.params.postId);
  useEffect(() => {
    if (id) {
      const details = posts.filter((post) => post.id === id)[0];
      setFormtitle(details.title);
      setFormbody(details.body);
    }
  }, []);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!id) {
      dispatch(addPost({ formTitle, formBody }));
    } else {
      dispatch(editPost({ id, formTitle, formBody }));
    }
    history.push(`/`);
  };

  return (
    <div>
      {id ? (
        <h1 className="primary" style={{ margin: "20px 0 40px 0" }}>
          Edit the Post!
        </h1>
      ) : (
        <h1 className="primary" style={{ margin: "20px 0 40px 0" }}>
          Create a new Post!
        </h1>
      )}

      <Container className="border border-success" style={{ maxWidth: 500 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Title of the Post"
              defaultValue={formTitle}
              onChange={(e) => setFormtitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Surprise US!!!"
              defaultValue={formBody}
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
