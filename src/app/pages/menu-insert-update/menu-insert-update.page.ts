import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';
import { Food } from 'src/app/models/food';

const collectionNames: string[] = [
  'Entrantes', 'Tostas', 'Ensaladas', 'Pastas',
  'Revueltos', 'Pescados', 'Carnes', 'Postres'
];
const postResponseMessage = 'Nuevo producto añadido:';

@Component({
  selector: 'app-menu-insert-update',
  templateUrl: './menu-insert-update.page.html',
  styleUrls: ['./menu-insert-update.page.scss'],
})
export class MenuInsertUpdatePage implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('description') descriptionInput: ElementRef;
  @ViewChild('price') priceInput: ElementRef;

  title: string;
  collectionName: string;
  isPost: boolean;
  isGet: boolean;
  menuId: string;
  buttonText: string;
  newFood: Food = new Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private login: LoginService,
    private menuService: MenuService,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
    this.login.goToLogin(this.login.isLogged());
    this.checkParam(this.activatedRoute.snapshot.paramMap.get('param'));
  }

  checkParam(param) {
    this.isPost = false;
    this.isGet = false;

    for (let name of collectionNames) {
      if (param == name) {
        this.isPost = true;
        this.collectionName = name;
        this.title = `Añadir a ${name}`;
        this.buttonText = 'Añadir';
        break;
      }
    }

    if (!this.isPost) {
      this.isGet = true;
      param = param.split('-');
      this.collectionName = param[0];
      this.menuId = param[1];
      this.buttonText = 'Modificar';
      this.sendRequest();
    }
  }

  checkRequest(name, description, price) {
    let pattern = /^[0-9]+(\.[0-9]+)?$/;

    if(!pattern.test(price)) {
      this.showError();
    }
    else {
      this.newFood.name = name;
      this.newFood.description = description;
      this.newFood.price = parseFloat(price);
      this.sendRequest();
    }
  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'Precio no válido',
      message: 'Debe introducir un precio en un formato válido',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  sendRequest() {
    switch (this.collectionName) {
      case 'Entrantes':
        if (this.isPost) {
          this.menuService.postEntree(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getEntree(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Tostas':
        if (this.isPost) {
          this.menuService.postToast(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getToast(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Ensaladas':
        if (this.isPost) {
          this.menuService.postSalad(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getSalad(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Pastas':
        if (this.isPost) {
          this.menuService.postPasta(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getPasta(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Revueltos':
        if (this.isPost) {
          this.menuService.postScrambled(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getPasta(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Pescados':
        if (this.isPost) {
          this.menuService.postFish(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getFish(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Carnes':
        if (this.isPost) {
          this.menuService.postMeat(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getMeat(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
      case 'Postres':
        if (this.isPost) {
          this.menuService.postDessert(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage} \"${item.name}\"`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getDessert(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        break;
    }
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      duration: 5000,
      color: 'dark'
    });
    
    toast.present();
  }

  checkResponse(item) {
    if (!item.message) {
      this.title = `Datos de ${item.name}`;
      this.newFood = item;
    }
    else {
      this.showToast(item.message);
      this.router.navigate(['/', 'menu']);
    }
  }
}