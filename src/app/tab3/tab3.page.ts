import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonButton, IonThumbnail } from '@ionic/angular/standalone';
import { CustomToolbarComponent } from '../components/custom-toolbar/custom-toolbar.component';
import { heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Books } from '../services/books';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, CustomToolbarComponent, IonList, IonItem, IonIcon, IonLabel, IonButton, IonThumbnail]
})
export class Tab3Page implements OnInit {
  private books : any[];
  constructor(private bookService: Books, private router: Router) {
    this.books = bookService.getAll();
    addIcons({heart})
   }

  ngOnInit() {
  }

  getFavoriteBooks(){
    return this.books.filter(book => book.userInteraction.favorite);
  }

  openBook(id: string) {
    this.router.navigate(['/books', id]);
  }
}
