import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
    ,SharedModule
  ]
})
export class BookModule { }
