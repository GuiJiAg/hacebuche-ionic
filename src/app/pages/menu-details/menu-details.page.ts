import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.page.html',
  styleUrls: ['./menu-details.page.scss'],
})
export class MenuDetailsPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private login: LoginService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.login.goToLogin(this.login.isLogged());
  }

}
