import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    private router: Router,
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
          this.confirmDelete(name, id);
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
          id = id.split('-');
          this.sendRequest(id[1]);
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
    switch (this.collectionName) {
      case 'Entrantes':
        this.menuService.deleteEntree(id).subscribe(
          item => this.showToast());
        this.dismissModal("delete");
        break;
    }
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: `Producto eliminado de ${this.collectionName}`,
      position: 'bottom',
      duration: 3500,
      color: 'dark'
    });
    
    toast.present();
  }
}
