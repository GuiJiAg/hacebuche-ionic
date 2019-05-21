import { Component } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { Food } from '../../models/food';

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
    private actionSheetController: ActionSheetController
  ) {}

  ionViewWillEnter() {
    this.collectionName = this.navParams.get('collectionName');
    this.collectionItems = this.navParams.get('collectionItems');
  }

  async myDismiss() {
    const result: string = "Funciona";
    
    await this.modalController.dismiss(result);
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      translucent: true,
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          alert(`Delete clicked(${id})`);
        }
      }, 
      {
        text: 'Ver/Modificar',
        icon: 'create',
        handler: () => {
          alert(`Select/Update clicked(${id})`);
        }
      }, 
      {
        text: 'Cancelar',
        role: 'cancel'
      }]
    });

    await actionSheet.present();
  } 
}
