import { Component, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'ea-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  @Output() searchBook: EventEmitter<string> = new EventEmitter<string>();

  bookSearch?: string;

  _onClick() {
    this.searchBook.emit(this.bookSearch);
    this.bookSearch = '';
  }
}
