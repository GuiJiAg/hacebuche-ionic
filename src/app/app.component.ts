import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private login: LoginService,
  ) {
    this.showListIfIsLogged();
    this.initializeApp();
  }

  showListIfIsLogged() {
    if (this.login.isLogged()) {
      this.appPages = [
        {
          title: 'Inicio',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Carta',
          url: '/menu',
          icon: 'restaurant'
        },
        {
          title: 'Vinos',
          url: '/wines',
          icon: 'wine'
        },
        {
          title: 'Salir',
          url: '/log-out',
          icon: 'log-out'
        }
      ];
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
