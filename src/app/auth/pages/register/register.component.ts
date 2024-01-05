import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  @ViewChild("registerForm") form: NgForm;
  constructor(private authService: AuthService) {}
  onFormSubmitted() {
    const formData = {
      name: this.form.value.name,
      email: this.form.value.email,
      contactNumber: this.form.value.contactNumber,
      password: this.form.value.password,
    };
    console.log("submitted");
    this.authService.register(formData);
  }
}
