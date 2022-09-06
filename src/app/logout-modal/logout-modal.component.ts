import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent implements OnInit {

  constructor(private modalCtrl:ModalController,
    private authService: AuthenticationService, 
    private router: Router) { }

  ngOnInit() {}


  dismissModal(){
  this.modalCtrl.dismiss();
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl: true});
    this.modalCtrl.dismiss();
  }
}
