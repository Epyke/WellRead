import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
import { BookStatus } from '../models/book-status';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CustomToolbarComponent]
})
export class Tab2Page {
  constructor() {}

  getBookStatus() {
    return Object.values(BookStatus);
  }
}
