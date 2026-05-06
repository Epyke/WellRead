import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonNav],
})
export class BookCardComponent {
  @Input() id = '';
  @Input() title = '';
  @Input() cover = '';
  @Input() author = '';

  constructor(private router: Router){
  }

  openBook(id: string) {
    this.router.navigate(['/books', id]);
  }
}