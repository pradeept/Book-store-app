import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart.component";
import { AddressComponent } from "./address/address.component";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PaymentComponent } from "./payment/payment.component";


@NgModule({
  declarations: [CartComponent, AddressComponent, PaymentComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
  exports: [CartComponent],
})
export class CartModule {}
