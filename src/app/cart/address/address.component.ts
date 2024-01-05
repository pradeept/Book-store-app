import { Component, Input } from "@angular/core";
import { Form } from "@angular/forms";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"],
})
export class AddressComponent {
  constructor() {}

  @Input() hasItems: boolean = false;

  handleAddressSubmit(form: Form) {
    console.log(form);
  }
}
