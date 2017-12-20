import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UpdatePage } from '../update/update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){}

  checkUpdate(event){
    this.navCtrl.push(UpdatePage);
    }

}
