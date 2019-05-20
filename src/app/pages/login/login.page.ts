import { Component } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Credential } from '../../models/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private credentials: Credential = new Credential;
  private deniedAcces: boolean = false;
  private errorMessage: string;
  
  constructor(private login: LoginService) { }

  signIn(email, password) {
    this.credentials.email = email;
    this.credentials.password = password;

    this.login.signIn(this.credentials).subscribe(
      response => this.checkResponse(response)
    );
  }

  checkResponse(response) {
    if (response.message != 'Acceso concedido') {
      this.deniedAcces = true;
      this.errorMessage = response.message;
    }
    else {
      sessionStorage.isLogged = true;
      localStorage.token = response.token;
      this.login.goToHome();
    }
  }
}
