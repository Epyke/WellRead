import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ModalController, IonInput, IonButtons, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-book-interaction-sheet',
  templateUrl: './book-interaction-sheet.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonButtons, IonItem, IonLabel]
})
export class BookInteractionSheetComponent {
  @Input() book: any;
  
  constructor(private modalCtrl: ModalController) {
    this.book = null;
  }
  name!: string;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}