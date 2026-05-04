import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.css'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class BookCardComponent {
  @Input() title = '';
  @Input() cover = '';
}