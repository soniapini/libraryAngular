import {Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, SimpleChanges} from '@angular/core';
import {Category} from "../../models/category";
import {Logger} from "../../services/logger.service";

@Component({
  selector: 'ea-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {
  /**
   * titolo visualizzato prima dell'elenco dei folder
   */
  @Input() title: string | undefined;

  /**
   * elenco dei folder visualizzati dal componente
   */
  @Input() categories: Array<Category> | undefined;

  /**
   * folder selezionato
   */
  @Input() defaultCategory: number | undefined;

  // tslint:disable-next-line:variable-name
  private _allowCreate = false;
  /**
   * permette di avere due tipo di layout
   */
  // @Input() set allowCreate(value: boolean) {
  //   this._allowCreate = FolderListComponent.coerceBooleanProperty(value);
  // }

  get allowCreate(): boolean {
    return this._allowCreate;
  }

  @Output() selectedFolder: EventEmitter<Category> = new EventEmitter<Category>();

  @Output() addFolder: EventEmitter<string> = new EventEmitter<string>();

  currentFolder: number | undefined;

  newFolderName: string | undefined;

  constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log('some_message');
    }
  }

  ngOnInit(): void {
    if (!this.title) {
      this.title = 'Category list';
    }

    if (this.defaultCategory !== null && this.defaultCategory !== undefined) {
      this.currentFolder = this.defaultCategory;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultFolder']) {
      this.currentFolder = this.defaultCategory;
    }
  }

  private static coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  onAddFolder() {
    // TODO emit event to parent
    this.addFolder.emit(this.newFolderName);
  }

  selectFolder(folder: Category, index: number) {
    this.currentFolder = index;
    this.selectedFolder.emit(folder);
  }
}
