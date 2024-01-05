import { NgModule } from "@angular/core";
import { BooksComponent } from "./books.component";
import { BooksService } from "./books.service";
import { CommonModule } from "@angular/common";
import { BookComponent } from "./book/book.component";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [BooksComponent],
})
export class BooksModule {}
