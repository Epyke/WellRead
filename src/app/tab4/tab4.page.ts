import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonAvatar, IonList, IonItem, IonLabel, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, locationOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonList, IonItem, IonLabel, IonIcon],
})
export class Tab4Page {
  constructor() {
    addIcons({ calendarOutline, locationOutline, mailOutline });
  }
}