import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    router: Router
  ) {
    authService.isLoggedIn ? router.navigate(["/store"]) : null;
  }
  @ViewChild("loginForm") form: NgForm;

  onFormSubmitted() {
    console.log("Form submitted!");
    const formData = {
      username: this.form.value.email,
      password: this.form.value.password,
    };
    this.authService.login(formData);
  }
}
