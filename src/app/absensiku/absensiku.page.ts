import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DailyHistoryPage } from '../daily-history/daily-history.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absensiku',
  templateUrl: './absensiku.page.html',
  styleUrls: ['./absensiku.page.scss'],
})
export class AbsensikuPage implements OnInit {

  constructor(
    public modalController:ModalController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async openShare(){
    const modal = await this.modalController.create({
      component:DailyHistoryPage,
      initialBreakpoint:0.6,
      breakpoints:[0, 0.25, 0.5, 0.6, 1.0],
      cssClass:'shareModal'
    });
    return await modal.present();
  }

}
