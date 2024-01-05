import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksModule } from "./books/books.module";
import { CartComponent } from "./cart/cart.component";
import { PageNotFoundComponent } from "./auth/pages/page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { AuthModule } from "./auth/auth.module";
import { navBar } from "./core/components/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { CartModule } from "./cart/cart.module";

@NgModule({
  declarations: [AppComponent,  PageNotFoundComponent, navBar], //to let know other components in this module about components, pipes that exists
  imports: [
    AppRoutingModule,
    BrowserModule,
    BooksModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    FormsModule,
    CartModule
  ], //to import export from other modules
  bootstrap: [AppComponent], //is the first/base component to render, nothing to do with bootstrap lib
})
export class AppModule {}
