import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegmentButton, IonSegment, IonButton, IonProgressBar, ModalController } from '@ionic/angular/standalone';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
import { BookStatus } from '../models/book-status';
import { Books } from '../services/books';
import { createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { BookInteractionSheetComponent } from '../components/book-interaction-sheet/book-interaction-sheet.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonContent, CustomToolbarComponent, IonSegmentButton, IonSegment, IonButton, IonProgressBar]
})
export class Tab2Page {
  private selectedStatus: string = BookStatus.Lendo;
  private books : any[];
  constructor(private bookService: Books, private router: Router, private modalCtrl: ModalController) {
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

  async openSheet(book: any) {
    const modal = await this.modalCtrl.create({
      component: BookInteractionSheetComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      componentProps: { book }
    });
    await modal.present();
  }

  
}
