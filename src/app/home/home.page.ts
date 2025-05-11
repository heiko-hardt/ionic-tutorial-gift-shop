import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonThumbnail,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonIcon,
    IonText,
    IonLabel,
    IonCard,
    IonImg,
    IonCol,
    IonRow,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonThumbnail,
  ],
})
export class HomePage {
  items: any[] = [];
  allItems: any[] = [];

  private api = inject(ApiService);

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit ()');
    this.getItem();
  }

  getItem() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }
}
