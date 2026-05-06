import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, IonActionSheet } from '@ionic/angular/standalone';
import { book, filter } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { BookCardComponent } from '../components/book-card/book-card.component';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
import { Books } from '../services/books';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, BookCardComponent, CustomToolbarComponent, IonActionSheet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1Page {
  private books: any[];
  private actionSheetButtons = [
    {
      text: 'Romance',
    },
    {
      text: 'Crime',
    },
    {
      text: 'História',
    },
    {
      text: 'Fantasia'
    },
  ];
  constructor(private bookService: Books) {
    this.books = bookService.getAll();
    addIcons({filter})
  }

  getActionSheetButtons(){
    return this.actionSheetButtons;
  }

  getBooks() {
    return this.books;
  }
}

