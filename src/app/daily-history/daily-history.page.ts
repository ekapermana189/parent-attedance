import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-daily-history',
  templateUrl: './daily-history.page.html',
  styleUrls: ['./daily-history.page.scss'],
})
export class DailyHistoryPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }
  
  dismissModal(){
    this.modalCtrl.dismiss();
    }

  histo(){
    this.router.navigateByUrl('/history');
    this.modalCtrl.dismiss();
  }
}
