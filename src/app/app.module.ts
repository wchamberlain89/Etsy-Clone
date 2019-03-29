import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemsListComponent } from './category-items-list/category-items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MenubarComponent,
    CategoryListComponent,
    CategoryItemsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
