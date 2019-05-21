import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage implements OnInit {

  constructor(
    private login: LoginService
  ) { }

  ngOnInit() {
    this.login.goToLogin(this.login.isLogged());
  }

}
