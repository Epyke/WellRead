import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegmentButton, IonSegment, IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
import { BookStatus } from '../models/book-status';
import { Books } from '../services/books';
import { createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CustomToolbarComponent, IonSegmentButton, IonSegment, IonButton, IonProgressBar]
})
export class Tab2Page {
  private selectedStatus: string = BookStatus.Lendo;
  private books : any[];
  constructor(private bookService: Books, private router: Router) {
    this.books = bookService.getAll();
    addIcons({createOutline})
  }

  getBookStatus() {
    return Object.values(BookStatus).filter(s => s !== '');
  }

  getSelectedStatus(){
    return this.selectedStatus;
  }

  setSelectedStatus(status: string){
    this.selectedStatus = status;
  }

  getBooks(){
    return this.books;
  }

  openBook(id: string) {
    this.router.navigate(['/books', id]);
  }
}
