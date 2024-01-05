import { Component, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Book } from "../types/book";
import { BooksService } from "./books.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  constructor(
    private booksService: BooksService,
    
  ) {}
  isShowing = true;

  books: Book[] = [];

  authenticate() {
    localStorage.getItem("itemLoggedInToken");
  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
