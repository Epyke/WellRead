import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNav, IonBackButton, IonIcon, IonFabButton, IonLabel, IonFab } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../services/books';
import { addIcons } from 'ionicons';
import { heartOutline, add, starOutline } from 'ionicons/icons';
import { BookStatus } from '../models/book-status';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonNav, IonBackButton, IonIcon, IonFabButton, IonLabel, IonFab]
})
export class BookDetailsPage {
  private book: any;
  BookStatus = BookStatus;

  constructor(private route: ActivatedRoute, private bookService: Books) {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getById(id!);
    addIcons({heartOutline, add, starOutline})
  }

  getBook() {
    return this.book;
  }
}
