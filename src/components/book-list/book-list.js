import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import ErrorIndicator from "../error-indicator/error-indicator";
import hoc_withBookstoreService from "../hoc/hoc-with-bookstore-service";
import Spinner from "../spinner/spinner";
import "./book-list.css";

class BookList extends Component {
  //new component that arriy from "connetc Reducer"
  componentDidMount() {
    const bookStore = this.props.bookStore;
    // const booksForLoading = this.props.booksForLoading;
    // console.log(bookStore.getBooks());

    // this.props.booksForLoading(bookStore.getBooks();
    this.props.booksRequested();

    bookStore
      .getBooks()
      .then((dataForResolve_otherName) => {
        this.props.booksForLoading(dataForResolve_otherName);
      })
      .catch((errorFromReject) => {
        this.props.booksErrorForReducer(errorFromReject);
      });
  }

  render() {
    const { books, loadingForSpinner, error, onAddingToCart } = this.props;

    if (loadingForSpinner) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              {
                <BookListItem
                  book={book}
                  onAddingToCart={() => {
                    return onAddingToCart(book.id);
                  }}
                />
              }
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.book_store_init_state_from_reducer, //method from the reducer file.
    loadingForSpinner: state.loadingForSpinner,
    error: state.error,
  };
};

//these is my actions for dispatcher wothout outer filie names "actins"
const mapDispatchToProps = (dispatch) => {
  return {
    booksForLoading: (newBooks) => {
      dispatch({
        type: "BOOKS_LOADED",
        payload: newBooks,
      });
    },
    booksRequested: () => {
      dispatch({
        type: "BOOKS_REQUESTED",
      });
    },
    booksErrorForReducer: (takedError) => {
      dispatch({
        type: "BOOKS_ERROR",
        payload: takedError,
      });
    },
    onAddingToCart: (bookId) => {
      dispatch({
        type: "BOOK_ADDING_TO_CART",
        payload: bookId,
      });
      // console.log("on Adding to Cart", id);
    },
  };
};

export default hoc_withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
