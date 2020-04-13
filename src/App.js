import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./auth/react-auth0-spa";

import Loading from "./components/Loading";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
