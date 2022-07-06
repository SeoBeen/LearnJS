import React, {Component} from "react";
import { List, ListItem, Container } from '@material-ui/core';
import BookListItem from "./BookListItem";

class BookList extends Component {
    render() {

        //const books = this.props.books;
        const bookItems = this.props.books.map( book => {
            return (
                <BookListItem book={book} key={book.ISBN} onSelectedBook={this.props.onSelectedBook}/>
            )
        })

        return (
            <List>
                {bookItems}
            </List>
        )
    }
}

export default BookList;