import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'ea-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] =  [];

}
