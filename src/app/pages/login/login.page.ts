import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

import { LoginService } from '../../services/login.service';
import { Credential } from '../../models/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private credentials: Credential = new Credential;
  
  constructor(
    private login: LoginService,
    private alertController: AlertController,
    private loadingController: LoadingController
    ) { }

  signIn(email, password) {
    this.credentials.email = email;
    this.credentials.password = password;

    this.presentLoading();
    this.login.signIn(this.credentials).subscribe(
      response => this.checkResponse(response)
    );
  }

  checkResponse(response) {
    if (response.message != 'Acceso concedido') {
      this.loadingController.dismiss();
      this.showErrorMessageAlert();
    }
    else {
      sessionStorage.isLogged = true;
      localStorage.token = response.token;
      this.login.goToHome();
    }
  }

  async showErrorMessageAlert() {
    const alert = await this.alertController.create({
      header: 'Datos Incorrectos',
      message: 'Correo o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      spinner: 'dots',
      translucent: true
    });

    await loading.present();
  } 
}
