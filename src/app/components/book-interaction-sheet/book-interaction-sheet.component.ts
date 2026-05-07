import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ModalController, IonButtons, IonItem, IonLabel, IonList, IonSegmentButton, IonInput, IonSegment, IonIcon } from '@ionic/angular/standalone';
import { BookStatus } from '../../models/book-status';
import { trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Books } from '../../services/books';
@Component({
  selector: 'app-book-interaction-sheet',
  templateUrl: './book-interaction-sheet.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonButtons, IonItem, IonLabel, IonList, IonSegmentButton, IonSegment, IonIcon]
})
export class BookInteractionSheetComponent {
  @Input() book: any;

  
  constructor(private modalCtrl: ModalController, private bookService: Books) {
    this.book = null;
    addIcons({trash})
  }
  name!: string;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  selectedStatus: string = '';
  currentPage: number = 0;
  score: number = -1;

  confirm() {
    this.bookService.updateInteraction(this.book.id, {
      status: this.selectedStatus,
      actualPageNumber: this.currentPage,
      score: this.score
    });
    this.modalCtrl.dismiss(null, 'confirm');
  }

  getBookStatus() {
    return Object.values(BookStatus).filter(s => s !== '');
  }

  remove(){
    this.modalCtrl.dismiss(this.name, 'remove');
  }
}