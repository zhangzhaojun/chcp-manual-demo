import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var chcp;//声明插件变量，外壳更新需要

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.bindEvent();//用于外壳更新
  }
//以下代码用于外壳更新，相关函数作用请参见插件官网说明
    bindEvent(){
      document.addEventListener('chcp_updateLoadFailed', this.onUpdateLoadError, false);
    }

    onUpdateLoadError(eventData){
      let error = eventData.detail.error;
      if (error && error.code == chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW) {
        console.log('Native side update required');
        let dialogMessage = '发现新版本，请下载更新。';
        chcp.requestApplicationUpdate(dialogMessage, this.userWentToStoreCallback, this.userDeclinedRedirectCallback);
      }
    }

    userWentToStoreCallback(){}

    userDeclinedRedirectCallback(){}


}

