import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, NavParams } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private storage: Storage,
    public apiService: ApiService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkLogin();
    });

  }


  openPage(page) {
    console.log(page);
    this.menuCtrl.close();
    if (page == 'login') {
      this.router.navigateByUrl("/login", { skipLocationChange: true });
    } else {
      this.navCtrl.navigateForward("/" + page, {});
    }



  }


  checkLogin() {
    this.storage.get('user_data').then((val) => {
      if (val) {
        // this.controllerService.setUser_details(val);
        this.apiService.user_data_set(val);
        this.router.navigateByUrl("/dashboard", { skipLocationChange: true });
      } else {
        this.router.navigateByUrl("/login", { skipLocationChange: true });
      }
    });
  }


}
