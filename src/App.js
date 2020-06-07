import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/login-signup/Register";
import Login from "./components/login-signup/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
