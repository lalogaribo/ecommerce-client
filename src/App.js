import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Register from "./components/login-signup/Register";
import Login from "./components/login-signup/Login";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import ProductContainer from "./components/products/ProductContainer";
import ProductDetail from "./components/products/ProductDetail";
import ProductForm from "./components/products/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/products" exact component={ProductContainer} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/new-product" component={ProductForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
