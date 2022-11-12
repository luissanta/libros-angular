import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from "./author-list/author-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
   AuthorListComponent
  ]
})
export class AuthorModule { }
