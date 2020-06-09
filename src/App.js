
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
import SignUp from "./views/SignUp";
import { useAuth0 } from "./auth/react-auth0-spa";
import history from "./utils/history";
import { connection_db } from "./utils/connection_db";

function App() {
  console.log(connection_db("SELECT * FROM `collabnotes`.`ESTUDIANTE`;", true));
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <Loading/>;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            {(isAuthenticated) ?(
              <>
                <Route path="/create" exact component={NoteEditor} />
                <Route path="/mynotes" exact component={MyNotes} />
                <Route path="/profile" exact component={Profile} />
              </>
            ):(
              <>
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
              </>
            )}
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
