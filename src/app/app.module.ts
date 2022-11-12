import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from "./book/book.module";
import { EditorialModule } from "./editorial/editorial.module";
import { HttpClientModule } from "@angular/common/http";
import { BookRoutingModule } from "./book/book.routing.module";
import {AuthorModule} from "./author/author.module";
import {AuthorRoutingModule} from "./author/author.routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    AuthorModule,
    EditorialModule,
    HttpClientModule,
    BookRoutingModule,
    AuthorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
