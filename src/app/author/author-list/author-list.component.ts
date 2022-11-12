import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";
import { AuthorDetail } from "../author-detail";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  authors: Array<AuthorDetail> = []
  selected: boolean = false
  selectedAuthor!: AuthorDetail

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((authors) => {
      this.authors = authors
    })
  }

  ngOnInit(): void {
    this.getAuthors()
  }

  onSelected(author: AuthorDetail): void {
    this.selected = true
    this.selectedAuthor = author
  }
}
