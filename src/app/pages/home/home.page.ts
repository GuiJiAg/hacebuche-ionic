import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private isLogged: boolean;

  constructor(
    private router: Router,
    private login: LoginService
    ) {}

  ngOnInit() {
    this.isLogged = this.login.isLogged();
    this.login.goToLogin(this.isLogged);
  }
}
