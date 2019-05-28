import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { Food } from '../../models/food';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.page.html',
  styleUrls: ['./modal-menu.page.scss'],
})
export class ModalMenuPage {
  collectionName: string;
  collectionItems: Food[];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private menuService: MenuService,
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
      case 'Entrantes':
        this.menuService.deleteEntree(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Tostas':
        this.menuService.deleteToast(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Ensaladas':
        this.menuService.deleteSalad(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Pastas':
        this.menuService.deletePasta(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Revueltos':
        this.menuService.deleteScrambled(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Pescados':
        this.menuService.deleteFish(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Carnes':
        this.menuService.deleteMeat(id).subscribe(item => this.showToast());
        this.dismissModal("delete");
        break;
      case 'Postres':
        this.menuService.deleteDessert(id).subscribe(item => this.showToast());
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
