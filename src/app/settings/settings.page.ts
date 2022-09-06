import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  features?: any;

  constructor() { }

  ngOnInit() {
    this.loadFeatures();
  }

  loadFeatures() {
    this.features = [
      {
        imgSrc: 'assets/icon/settings/person.svg',
        title: 'Account',
        url: '/account',
        activeMenu: true,
      },
      {
        imgSrc: 'assets/icon/settings/carts.svg',
        title: 'Merchandise',
        url: 'fitur/materi-mengajar',
        activeMenu: false,
      },
      {
        imgSrc: 'assets/icon/settings/coins.svg',
        title: 'Poin',
        url: 'fitur/dompet',
        activeMenu: false,
      },
      {
        imgSrc: 'assets/icon/settings/review.svg',
        title: 'Review',
        url: 'fitur/dompet',
        activeMenu: false,
      },
      {
        imgSrc: 'assets/icon/settings/information.svg',
        title: 'Tentang',
        url: 'fitur/dompet',
        activeMenu: false,
      },
      {
        imgSrc: 'assets/icon/settings/terms.svg',
        title: 'Terms Of Services',
        url: 'fitur/dompet',
        activeMenu: false,
      },
      {
        imgSrc: 'assets/icon/settings/support.svg',
        title: 'Support',
        url: 'fitur/dompet',
        activeMenu: false,
      },
      
    ];
  }

}
