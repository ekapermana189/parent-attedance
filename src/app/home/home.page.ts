import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuAllPage } from '../menu-all/menu-all.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  features?: any;
  

  constructor(
    public modalController:ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadFeatures();
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
        imgSrc: 'assets/icon/lihsem1.svg',
        title: 'Lihat Semua',
        fn: ()=>{
          this.openShare()
        },
        activeMenu: true,
        cssClass:'imgSip'
      },
    ];
  }

  async openShare(){
    const modal = await this.modalController.create({
      component:MenuAllPage,
      initialBreakpoint:0.6,
      breakpoints:[0, 0.25, 0.5, 0.6],
      cssClass:'shareModal'
    });
    return await modal.present();
  }

  det(){
    this.router.navigateByUrl('/detail-attedance');
  }
  notif(){
    this.router.navigateByUrl('/notifikasi');
  }
  set(){
    this.router.navigateByUrl('/settings');
  }

}
