import { Component, Input } from "@angular/core";
import { CartService } from "src/app/services/cart-service.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent {
  @Input() hasItems: boolean;
  constructor(private cartService: CartService) {}
  getCart() {
    return this.cartService.get();
  }
  getCartTotal() {
    let sum = 0;
    if (this.getCart().length > 0) {
      this.getCart().map((item) => (sum += item.cost));
    }
    return sum;
  }

  handlePayment(){
    alert("Payment is coming soon!")
  }
}
