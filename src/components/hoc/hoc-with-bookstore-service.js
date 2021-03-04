import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const hoc_withBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Wrapper {...props} bookStore={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default hoc_withBookstoreService;
