import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loginData } from "./pages/interfaces/loginData";
import { registerData } from "./pages/interfaces/registerData";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean;
  constructor(private httpClient: HttpClient, private router: Router) {
    if (
      localStorage.getItem("loggedIn") &&
      localStorage.getItem("loggedIn") !== null
    ) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  login({ username, password }: loginData) {
    this.httpClient
      .post("/api/login", {
        username: username,
        password: password,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem("loggedIn", res.toString());
          this.isLoggedIn = true;
          this.router.navigate(["store"]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  logout() {
    localStorage.removeItem("loggedIn");
    this.isLoggedIn = false;
    this.router.navigate(["/"]);
  }

  register({ name, email, contactNumber, password }: registerData) {
    this.httpClient
      .post("/api/register", {
        name,
        email,
        contactNumber,
        password,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/"]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
