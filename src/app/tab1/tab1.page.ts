import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon } from '@ionic/angular/standalone';
import { filter } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { BookCardComponent } from '../components/book-card/book-card.component';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, BookCardComponent, CustomToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1Page {
  books: any[] = [];
  constructor() {
    addIcons({filter})
    this.books = [
      {title:"L'Odyssé d'Homer", cover:'assets/books/odysse.jpg', author:'Isabelle Pandazopoulos'},
      {title:'Un sac de billes', cover:'assets/books/unsacdebilles.jpg', author:'Joseph Joffo'},
      {title:'Robinson Crusoé', cover:'assets/books/robinsonetcrusoe.jpg', author:'Daniel Defoe'},
      {title:'La planète des singes', cover:'assets/books/planetedessinges.jpg', author:'Pierre Boule'}
    ];
}
}

