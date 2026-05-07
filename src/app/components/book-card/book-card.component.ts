import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle],
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