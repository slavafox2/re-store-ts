import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-context";
import BookstoreService from "./services/bookstore-services";
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
  <ErrorBoundry>
    <BookstoreServiceProvider value={bookstoreService}>
      <Router>
        <App />
      </Router>
    </BookstoreServiceProvider>
  </ErrorBoundry>
  </Provider>
  ,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//  </React.StrictMode>
