import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddProduct from "./components/add-product.component";
import Product from "./components/product.component";
import ProductsList from "./components/product-list.component";
import ProductTop from "./components/get-top.component";
import Revenue from "./components/get-revenue.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/products"} className="navbar-brand">
            myShop
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/top"} className="nav-link">
                Top Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/revenue"} className="nav-link">
                Revenue
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/products"]} component={ProductsList} />
            <Route exact path="/add" component={AddProduct} />
            <Route path="/products/:id" component={Product} />
            <Route exact path={["/", "/top"]} component={ProductTop} />
            <Route exact path={["/", "/revenue"]} component={Revenue} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
