import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    {
      title: 'Consultar Carta',
      url: '/menu',
      icon: 'restaurant'
    },
    {
      title: 'Consultar Vinos',
      url: '/wines',
      icon: 'wine'
    }
  ];

  constructor(
    private login: LoginService
  ) {}

  ngOnInit() {
    this.login.goToLogin(this.login.isLogged());
  }
}
