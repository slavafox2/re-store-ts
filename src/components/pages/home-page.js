import React from "react";
import BookList from "../book-list/book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const Homepage = () => {
  // const b = [
  //   {
  //     id: 1,
  //     title: 'Production-Ready Microservices',
  //     author: 'Susan J. Fowler' },
  //   {
  //     id: 2,
  //     title: 'Release It!',
  //     author: 'Michael T. Nygard'}
  // ];

  // return <BookList books={b} />;
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default Homepage;
