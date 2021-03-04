const initialState = {
  book_store_init_state_from_reducer: [],
  loadingForSpinner: true,
  error: null,
  cartItems: [
    // {
    //   id: 1,
    //   title: "Book 1",
    //   count: 3,
    //   total: 150,
    // },
    // {
    //   id: 2,
    //   title: "Book 2",
    //   count: 1,
    //   total: 250,
    // },
  ],
  orderTotal: 0,
  // [
  //   {
  //     id: 1,
  //     title: "Production-Ready Microservices",
  //     author: "Susan J. Fowler",
  //   },
  //   {
  //     id: 2,
  //     title: "Release It!",
  //     author: "Michael T. Nygard",
  //   },
  // ],
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

// hicking-fucking undestandable the pattern code
const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { book_store_init_state_from_reducer, cartItems } = state;

  const book = book_store_init_state_from_reducer.find(
    ({ id }) => id === bookId
  );
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "BOOKS_REQUESTED":
      return {
        ...state,
        book_store_init_state_from_reducer: [],
        loadingForSpinner: true,
        error: null,
      };
    case "BOOKS_LOADED":
      return {
        ...state,
        book_store_init_state_from_reducer: action.payload,
        loadingForSpinner: false,
        error: null,
      };
    case "BOOKS_ERROR":
      return {
        ...state,
        book_store_init_state_from_reducer: [],
        loadingForSpinner: false,
        error: action.payload,
      };

    case "BOOK_ADDING_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  }
};

export default reducer;
