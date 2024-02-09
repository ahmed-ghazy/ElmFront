import { Component, OnInit, HostListener } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookSearch } from '../../models/book-search';
import { BookModel } from '../../models/book-model';
import { ResultResponse } from 'src/app/core/models/result-response';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  search = new BookSearch();
  books = new ResultResponse<BookModel>();
  isLoading = false;


  constructor(private bookService: BookService) {

  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.isLoading = true;
    this.bookService
      .getAll(this.search)
      .subscribe((res: any) => {
       this.books.PageCount=res.Data.PageCount;
       this.books.TotalCount=res.Data.TotalCount;
       this.books.PageNumber=res.Data.PageNumber;
       this.books.PageSize=res.Data.PageSize;
       this.books.Items = [...this.books.Items, ...res.Data.Items];
        this.isLoading = false;
      });
  }

  onSearch(){
    
    this.search.PageNumber=1;
    this.books.Items=[];
    this.isLoading = true;
    this.bookService
      .getAll(this.search)
      .subscribe((res: any) => {
       this.books=res.Data; 
        this.isLoading = false;
      });
  }
  @HostListener("document:scroll")
  onScroll(event: any): void {
    if (this.search.PageNumber != this.books.PageNumber) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!this.isLoading) {
          this.search.PageNumber++;
          this.getAll();
        }
      }
    }
  }
}
