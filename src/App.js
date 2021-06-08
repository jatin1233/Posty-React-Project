import "./App.css";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/Post";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Header />
          <Switch>
            <Route path="/" exact component={PostsList} />
            <Route path="/post/add" exact component={AddForm} />
            <Route path="/post/edit/:postId" exact component={AddForm} />
            <Route path="/post/:postId" exact component={Post} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
