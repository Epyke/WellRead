import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNav, IonBackButton, IonIcon, IonFabButton, IonLabel, IonFab, ModalController } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../services/books';
import { addIcons } from 'ionicons';
import { heartOutline, heart, add, starOutline } from 'ionicons/icons';
import { BookStatus } from '../models/book-status';
import { BookInteractionSheetComponent } from '../components/book-interaction-sheet/book-interaction-sheet.component';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonNav, IonBackButton, IonIcon, IonFabButton, IonLabel, IonFab]
})
export class BookDetailsPage {
  private book: any;
  private isFavorite: boolean;
  BookStatus = BookStatus;

  constructor(private route: ActivatedRoute, private bookService: Books, private modalCtrl: ModalController) {
    this.isFavorite = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getById(id!);
    addIcons({heartOutline, heart, add, starOutline})
  }

  async openSheet() {
  const modal = await this.modalCtrl.create({
    component: BookInteractionSheetComponent,
    initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1],
    componentProps: {
      book: this.book
    }
  });
  await modal.present();
  }

  getBook() {
    return this.book;
  }

  getIsFavorite(){
    return this.isFavorite;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
