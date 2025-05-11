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
  IonSearchbar,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSearchbar,
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
    RouterLink
  ],
})
export class HomePage {
  items: any[] = [];
  allItems: any[] = [];
  query!: string;

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

  onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query));
  }
}
