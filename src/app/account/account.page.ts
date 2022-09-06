import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async openModal(msg){
    const modal =await this.modalCtrl.create({
      component:LogoutModalComponent,
      componentProps:{message: msg},
      cssClass:'alert-modal'
    });

    await modal.present();
  }
}
