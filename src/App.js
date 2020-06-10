
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import NoteEditor from "./views/NoteEditor";
import MyNotes from "./views/MyNotes";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Upload from "./views/Upload";
import SignUp from "./views/SignUp";
import history from "./utils/history";
import { connection_db } from "./utils/connection_db";
import { isAuthenticated } from "./utils/authenticated";

function App() {
  const x = connection_db("SELECT * FROM `collabnotes`.`ESTUDIANTE`;", true);

  const promise1 = Promise.resolve(x);

  promise1.then((value) => {
    console.log(value);
  });
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/create" exact component={NoteEditor} />
            <Route path="/mynotes" exact component={MyNotes} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/profile" exact component={Profile} />
            )}
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
