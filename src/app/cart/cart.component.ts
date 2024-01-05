import { Component } from "@angular/core";
import { CartService } from "../services/cart-service.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  hasItems: boolean = this.getCart().length > 0 ? true : false;

  getCart() {
    return this.cartService.get();
  }
}

// For integrating stripe payment gateway
// https://www.youtube.com/watch?v=qiRnyI4KGwg&ab_channel=CodingShiksha
