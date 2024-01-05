import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import { PageNotFoundComponent } from "./auth/pages/page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/pages/login/login.component";
import { RegisterComponent } from "./auth/pages/register/register.component";
import { authGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    title: "Login",
    component: LoginComponent,
  },
  {
    path: "cart",
    title: "Book Store - cart",
    component: CartComponent,
    canActivate: [authGuard],
  },
  {
    path: "store",
    title: "Book Store",
    component: BooksComponent,
    canActivate: [authGuard],
  },
  {
    path: "register",
    title: "Register",
    component: RegisterComponent,
  },
  {
    path: "**",
    title: "Book Store",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
