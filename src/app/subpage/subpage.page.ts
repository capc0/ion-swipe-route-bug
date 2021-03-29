import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  constructor(
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack(``);
  }

}
