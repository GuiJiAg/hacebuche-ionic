import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(private login: LoginService) { }

  logOut() {
    sessionStorage.removeItem("isLogged");
    this.login.goToLogin(false);
  }
}
