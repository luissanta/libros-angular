import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { BookDetail } from "../book-detail";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Array<BookDetail> = []
  selected: boolean = false;
  selectedBook!: BookDetail;

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books
    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

  onSelected(book: BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }
}
