import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu-all',
  templateUrl: './menu-all.page.html',
  styleUrls: ['./menu-all.page.scss'],
})
export class MenuAllPage implements OnInit {
  features?: any;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadFeatures();
  }


  dismissModal(){
    this.modalCtrl.dismiss();
    }


    loadFeatures() {
      this.features = [
        {
          imgSrc: 'assets/icon/note.svg',
          title: 'Absensiku',
          url: '/absensiku',
          activeMenu: true,
        },
        {
          imgSrc: 'assets/icon/history.svg',
          title: 'Riwayat',
          url: '/history',
          activeMenu: true,
        },
        {
          imgSrc: 'assets/icon/coins.svg',
          title: 'Poin',
          url: 'fitur/dompet',
          activeMenu: false,
        },
        {
          imgSrc: 'assets/icon/user-add.svg',
          title: 'Tambah Murid',
          url: '/view-student',
          activeMenu: true,
        },
        {
          imgSrc: 'assets/icon/coins.svg',
          title: 'Poin',
          url: 'fitur/dompet',
          activeMenu: false,
        },
      ];
    }
}
