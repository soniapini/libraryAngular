import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {Logger, LoggerImplService} from "./services/logger.service";
import { CategoryComponent } from './components/category/category.component';
import { AcademyLibraryLogoComponent } from './academy-library-logo/academy-library-logo.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';

export const APP_TITLE = new InjectionToken<string>('title');

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    CategoryComponent,
    AcademyLibraryLogoComponent,
    CategoryListComponent,

  ],
  providers: [
    {provide: Logger, useClass: LoggerImplService},
    {provide: APP_TITLE, useValue: 'Sonia Academy Library'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
