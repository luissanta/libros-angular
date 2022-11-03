import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Array<Book> = []
  selected: boolean = false;
  selectedBook!: Book;

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

  onSelected(book: Book): void {
    this.selected = true;
    this.selectedBook = book;
  }
}
