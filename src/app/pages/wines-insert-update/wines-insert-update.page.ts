import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { LoginService } from 'src/app/services/login.service';
import { WinesService } from 'src/app/services/wines.service';
import { Wine } from 'src/app/models/wine';

const collectionNames: string[] = [
  'Andaluces', 'Rioja', 'Ribera del Duero', 'Castilla',
  'Albariños', 'Rueda', 'Olorosos'
];
const postResponseMessage = 'Producto añadido en ';
const putResponseMessage = 'Producto modificado en ';

@Component({
  selector: 'app-wines-insert-update',
  templateUrl: './wines-insert-update.page.html',
  styleUrls: ['./wines-insert-update.page.scss'],
})
export class WinesInsertUpdatePage implements OnInit {
  title: string;
  collectionName: string;
  isPost: boolean;
  isGet: boolean;
  wineId: string;
  buttonText: string;
  newWine: Wine = new Wine;

  customPopoverOptions: any = {
    header: 'Seleccione un Tipo'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private login: LoginService,
    private winesService: WinesService,
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
      this.wineId = param[1];
      this.buttonText = 'Modificar';
      this.sendRequest();
    }
  }

  checkRequest(cupPrice, bottlePrice) {
    let pattern = /^[0-9]+(\.[0-9]+)?$/;

    if(!pattern.test(cupPrice)) {
      this.showError("price");
    }
    else if(!pattern.test(bottlePrice)) {
      this.showError("price");
    }
    else if(!this.newWine.type) {
      this.showError("type");
    }
    else {   
      this.newWine.cupPrice = parseFloat(cupPrice);
      this.newWine.bottlePrice = parseFloat(bottlePrice);
      this.sendRequest();
    }
  }

  async showError(typeError) {
    if(typeError == 'price') {
      const alert = await this.alertController.create({
        header: 'Precio no válido',
        message: 'Debe introducir un precio en un formato válido',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
    else {
      const alert = await this.alertController.create({
        header: 'Tipo no válido',
        message: 'Debe introducir un tipo',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

  sendRequest() {
    switch (this.collectionName) {
      case 'Andaluces':
        if (this.isPost) {
          this.winesService.postAndalusianWine(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getAndalusianWine(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putAndalusianWine(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Rioja':
        if (this.isPost) {
          this.winesService.postRiojaWine(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getRiojaWine(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putRiojaWine(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Ribera del Duero':
        if (this.isPost) {
          this.winesService.postRiberaWine(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getRiberaWine(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putRiberaWine(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Castilla':
        if (this.isPost) {
          this.winesService.postCastillaWine(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getCastillaWine(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putCastillaWine(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Albariños':
        if (this.isPost) {
          this.winesService.postAlbarinio(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getAlbarinio(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putAlbarinio(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Rueda':
        if (this.isPost) {
          this.winesService.postRuedaWine(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getRuedaWine(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putRuedaWine(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        break;
      case 'Olorosos':
        if (this.isPost) {
          this.winesService.postOloroso(this.newWine).subscribe(
            item => this.showToast(`${postResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
        }
        else if (this.isGet) {
          this.winesService.getOloroso(this.wineId).subscribe(item => this.checkResponse(item));
          this.isGet = false;
        }
        else {
          this.winesService.putOloroso(this.newWine, this.wineId).subscribe(
            item => this.showToast(`${putResponseMessage}${this.collectionName}`));
          this.router.navigate(['/', 'wines']);
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
      this.newWine = item;
    }
    else {
      this.showToast("ERROR: Ese producto no existe");
      this.router.navigate(['/', 'wines']);
    }
  }
}
