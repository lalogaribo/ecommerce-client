import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/login-signup/Register";
import Login from "./components/login-signup/Login";
import Home from "./pages/Home";
import ProductContainer from "./components/products/ProductContainer";
import ProductDetail from "./components/products/ProductDetail";
import ProductForm from "./components/products/ProductForm";
import ProductUpdateForm from "./components/products/ProducUpdateForm";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/shared/Footer";
import NotFound from "./components/shared/NotFound";
import Checkout from "./pages/checkout/Checkout.component";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products" exact component={ProductContainer} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route
            path="/users/:user_id/products/:id"
            component={ProductUpdateForm}
          />
          <Route path="/new-product" component={ProductForm} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
