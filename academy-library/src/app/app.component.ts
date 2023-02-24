import {Component, Inject, OnInit} from '@angular/core';
import {Book} from './models/book';
import {Category} from './models/category';
import {APP_TITLE} from "./app.module";
import { BooksService } from './services/books.service';
import { CategoriesService } from './services/categories.service';
import { CategoryType } from './models/category-type';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  _categories: Array<Category> = [];
  _customCategories: Array<Category> = [];
  _defaultCategoryId: number = 0;
  customCategoryId: number = 0;
  bookCategoriesTitle: string = '';
  currentBook: Book | undefined;
  newCategory: string | undefined;


  constructor(@Inject(APP_TITLE) title: string, 
  readonly categoryClient: CategoriesService, //DI
  readonly bookClient: BooksService) {
    this.title = title;
    this.bookClient.getMessages().subscribe((books) => console.log("messaggi per category", books));

  }

  ngOnInit(): void {
    // // TODO load data from services (or backend);
    this.loadCategories();
    this.loadCustomCategories();
     
    // this.defaultFolderId = 1;
    // this.customFolderId = 0;
    //
    // this.customFolders = this.loadCustomFolders();
    //
    // this.messages = this.loadMessages();
    // this.clearCurrentMessage();
    //
    // this.defaultQuery = 'js';
  }

  _onSelectCategory(selectedCategory: Category) {
    console.log("Recuperare i libri appartenente alla categoria: ", selectedCategory.description);
  }

  _onAddCategory(newCategory: Category) {
    this.categoryClient.addNewCategory(newCategory)
    .subscribe(
      (category) => {
        console.log("Aggiunta la nuova category ", newCategory);
        this._customCategories.push(category);
      },
      () => console.error("Errore durante il salvataggio di una category")
      );
  }

  private loadCustomCategories() {
   this.categoryClient.getCustomCategories()
   .subscribe((categories) => {
    this._customCategories = categories;
   })
  }

  // // TODO load folder list from service
  private loadCategories(): void {
    this.categoryClient.getDefaultCategories()
    .subscribe((categories: Category[]) => {
      this._categories = categories;
    })
  }

  _loadBooksForSelectedCategory(event: Category) {
    this.updateMessageListView(event.description, event.id);

    // TODO load data from services (or backend)
    // this.bookService.loadBooksByCategory(event.id);
  }

  private updateMessageListView(title: string, defaultFolderId?: number, customFolderId?: number) {
    this.setBookCategoriesTitle(title);
    this.customCategoryId = customFolderId ? customFolderId : 0;
    this._defaultCategoryId = defaultFolderId ? defaultFolderId : 0;
    this.clearCurrentBook();
  }

  private setBookCategoriesTitle(title: string) {
    this.bookCategoriesTitle = title;
  }

  private clearCurrentBook() {
    this.currentBook = undefined;
  }

  // // TODO load messages list from service
  // private loadMessages(): Observable<Array<Message>> {
  //   return this.mailMessageService.getMessages();
  // }
  //

  //
  // private clearCurrentMessage() {
  //   this.currentMessage = null;
  // }
  //
  // // TODO load custom folder list from service
  // private loadCustomFolders(): Observable<Array<Category>> {
  //   return this.accountService.getAccountCustomFolders();
  // }
  //
  // private clearFolderAndMessgeSelection() {
  //   this.clearCurrentMessage();
  //   this.defaultFolderId = 0;
  //   this.customFolderId = 0;
  // }
  //


  //
  // reloadMessageAfterDelete() {
  //   let currentFolder;
  //   if (!!this.defaultFolderId) {
  //     this.folders.subscribe((folders: Category[]) => {
  //       currentFolder = folders[this.defaultFolderId];
  //       this.loadMessagesForSelectedFolder(currentFolder);
  //     });
  //   } else {
  //     this.customFolders.subscribe((folders: Category[]) => {
  //       currentFolder = folders[this.defaultFolderId];
  //       this.loadMessagesForSelectedFolder(currentFolder);
  //     });
  //   }
  // }
  //

  //
  // loadMessagesForSelectedCustomFolder(event: Category) {
  //   this.updateMessageListView(event.description, 0, event.id);
  //
  //   // TODO load data from services (or backend)
  //   this.mailMessageService.loadMessagesByFolder(event.id, true);
  // }
  //
  // selectCurrentMessage(event: MessageActionEvent) {
  //   this.currentMessage = event.message;
  // }
  //
  compose(template?: Book) {
    // if (template) {
    //   this.draft = template;
    // }
    // this.composerActive = true;
  }
  //
  // delete(event: MessageActionEvent) {
  //   // TODO chiamare servizio rest per eliminare il messaggio
  //   this.mailMessageService.deleteMessage(event.message).subscribe(
  //     () => {
  //       console.log('Messaggio spostato nel folder Trash');
  //       this.currentMessage = null;
  //       this.reloadMessageAfterDelete();
  //     },
  //     () => console.error('Errore durante la cancellazione del messaggio')
  //   );
  // }
  //
  // replyTo(event: MessageActionEvent) {
  //   // TODO optional lab: delegate reply to MessageReplyService
  //   const message = event.message;
  //   const template: Message = {
  //     to: message.from,
  //     from: 'carlo.bonamico@nispro.it',
  //     subject: 'Re: ' + message.subject,
  //     body: '>' + message.body
  //   };
  //   this.compose(template);
  // }
  //
  // forward(message: MessageActionEvent) {
  //   // TODO optional lab:
  //
  // }
  //
  // updateDraft(event: MessageActionEvent) {
  //   this.draft = event.message;
  //   this.composerActive = true;
  // }
  //
  // send(event: MessageActionEvent) {
  //   // TODO Gestire il mancato invio del messaggio
  //   // TODO ADVANCED visualizzazione componente ALERT ERRORE INVIO o ROUTING su pagina di ERRORE
  //   this.mailMessageService.sendMessage(event.message).subscribe(() => {
  //       console.log('Messaggio inviato con successo');
  //       this.closeComposer();
  //     },
  //     () => console.error('Impossibile inviare il messaggio'));
  // }
  //
  // closeComposer() {
  //   this.composerActive = false;
  // }
  //
  // search(query: string) {
  //   this.messageListTitle = 'Messages matching ' + query;
  //
  //   this.mailMessageService.getMessagesBySearch(query);
  //   this.clearFolderAndMessgeSelection();
  // }
  //
  // addFolder(folderName: string) {
  //   this.accountService.addCustomFolder(folderName);
  // }


}
