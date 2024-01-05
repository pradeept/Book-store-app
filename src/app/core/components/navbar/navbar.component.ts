import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { CartService } from "src/app/services/cart-service.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class navBar implements OnInit {
  constructor(
    private router: Router,
    private cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}
  getCartItemsLength() {
    return this.cartService.cart.length;
  }

  handleLogout() {
    this.authService.logout();
  }
}
