import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { Wine } from '../../models/wine';
import { WinesService } from 'src/app/services/wines.service';

@Component({
  selector: 'app-modal-wines',
  templateUrl: './modal-wines.page.html',
  styleUrls: ['./modal-wines.page.scss'],
})
export class ModalWinesPage {
  collectionName: string;
  collectionItems: Wine[];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private winesService: WinesService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    this.collectionName = this.navParams.get('collectionName');
    this.collectionItems = this.navParams.get('collectionItems');
  }

  async dismissModal(type, value = false) {
    const result = { resultType: type, resultValue: value };
    await this.modalController.dismiss(result);
  }

  async presentActionSheet(id, name) {
    const actionSheet = await this.actionSheetController.create({
      header: name,
      translucent: true,
      buttons: [{
        text: 'Ver/Modificar',
        icon: 'create',
        handler: () => {
          this.dismissModal('post-put', id);
        }
      },
      { 
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          id = id.split('-');
          this.confirmDelete(name, id[1]);
        }
      }, 
      {
        text: 'Cancelar',
        role: 'cancel'
      }]
    });

    await actionSheet.present();
  }
  
  async confirmDelete(name, id) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: `¿Borrar ${name}?`,
      buttons: [
      { 
        text: 'Borrar',
        role: 'destructive',
        handler: () => {
          this.sendRequest(id);
        }
      }, 
      {
        text: 'Cancelar',
        role: 'cancel'
      }]
    });

    await alert.present();
  }

  sendRequest(id) {
    this.presentLoading();

    switch (this.collectionName) {
      case 'Andaluces':
        this.winesService.deleteAndalusianWine(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Rioja':
        this.winesService.deleteRiojaWine(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Ribera del Duero':
        this.winesService.deleteRiberaWine(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Castilla':
        this.winesService.deleteCastillaWine(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Albariños':
        this.winesService.deleteAlbarinio(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Rueda':
        this.winesService.deleteRuedaWine(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Olorosos':
        this.winesService.deleteOloroso(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'dots',
      translucent: true
    });

    await loading.present();
  } 

  async showToast() {
    const toast = await this.toastController.create({
      message: `Producto eliminado de ${this.collectionName}`,
      position: 'bottom',
      duration: 3500,
      color: 'dark'
    });
    
    this.loadingController.dismiss();
    toast.present();
  }
}
