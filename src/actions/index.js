// const booksLoaded = (newBooks) => {
//   return {
//     type: "BOOKS_LOADED",
//     payload: newBooks,
//   };
// };

// const booksRequested = () => {
//   return {
//     type: "BOOKS_REQUESTED",
//   };
// };

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDING_TO_CART",
    payload: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
    return {
      type: 'BOOK_REMOVED_FROM_CART',
      payload: bookId
    };
  };
  
  export const allBooksRemovedFromCart = (bookId) => {
    return {
      type: 'ALL_BOOKS_REMOVED_FROM_CART',
      payload: bookId
    };
  };

//  export { onAddingToCart };
