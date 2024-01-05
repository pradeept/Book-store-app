import { Component, Input, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart-service.service";
import { Book } from "src/app/types/book";
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  constructor(private cartService: CartService) {}
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
  ngOnInit(): void {
    this.cartService.get().filter((bookInCart) => {
      this.book.name === bookInCart.name
        ? (this.isInCart = true)
        : (this.isInCart = false);
    });
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
