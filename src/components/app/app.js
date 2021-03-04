// import { arrayOf } from 'prop-types';
import React from "react";
import { Route, Switch } from "react-router-dom";
import hoc_withBookstoreService from "../hoc/hoc-with-bookstore-service";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";
import "./app";

const App = ({ bookStore }) => {
  // console.log("bookStore");
  // console.log(bookStore.getBooks());
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />

        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default hoc_withBookstoreService()(App);
