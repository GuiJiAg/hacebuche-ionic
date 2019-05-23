import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';
import { Food } from 'src/app/models/food';

const collectionNames: string[] = [
  'Entrantes', 'Tostas', 'Ensaladas', 'Pastas',
  'Revueltos', 'Pescados', 'Carnes', 'Postres'
];
const postResponseMessage = 'Producto añadido en ';
const putResponseMessage = 'Producto modificado en ';

@Component({
  selector: 'app-menu-insert-update',
  templateUrl: './menu-insert-update.page.html',
  styleUrls: ['./menu-insert-update.page.scss'],
})
export class MenuInsertUpdatePage implements OnInit {
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
    private toastController: ToastController
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

  checkRequest(price) {
    let pattern = /^[0-9]+(\.[0-9]+)?$/;

    if(!pattern.test(price)) {
      this.showError();
    }
    else {
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
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getEntree(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putEntree(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Tostas':
        if (this.isPost) {
          this.menuService.postToast(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getToast(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putToast(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Ensaladas':
        if (this.isPost) {
          this.menuService.postSalad(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getSalad(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putSalad(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Pastas':
        if (this.isPost) {
          this.menuService.postPasta(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getPasta(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putPasta(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Revueltos':
        if (this.isPost) {
          this.menuService.postScrambled(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getScrambled(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putScrambled(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Pescados':
        if (this.isPost) {
          this.menuService.postFish(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getFish(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putFish(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Carnes':
        if (this.isPost) {
          this.menuService.postMeat(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getMeat(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putMeat(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        break;
      case 'Postres':
        if (this.isPost) {
          this.menuService.postDessert(this.newFood).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
        }
        else if (this.isGet) {
          this.menuService.getDessert(this.menuId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.menuService.putDessert(this.newFood, this.menuId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'menu']);
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
    if (item) {
      this.title = `Datos de ${item.name}`;
      this.newFood = item;
    }
    else {
      this.showToast("ERROR: Ese producto no existe");
      this.router.navigate(['/', 'menu']);
    }
  }
}