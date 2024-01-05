import { Injectable } from "@angular/core";
import { Book } from "../types/book";

//Demonstrating state change

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart: Book[] = [];
  constructor() {}

  add(book: Book) {
    this.cart.push(book);
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b.name !== book.name);
  }

  get() {
    return this.cart;
  }
}
