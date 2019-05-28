import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';

import { Food } from '../../models/food';
import { MenuService } from '../../services/menu.service';
import { LoginService } from '../../services/login.service';
import { ModalMenuPage } from '../modal-menu/modal-menu.page';

const rootAssets = '../../../assets';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  collectionName: string;
  collectionItems: Food[];
  collections = [
    {
      name: 'Entrantes',
      img: `${rootAssets}/entrees.jpg`
    },
    {
      name: 'Tostas',
      img: `${rootAssets}/toasts.jpg`
    },
    {
      name: 'Ensaladas',
      img: `${rootAssets}/salads.jpeg`
    },
    {
      name: 'Pastas',
      img: `${rootAssets}/pastas.jpg`
    },
    {
      name: 'Revueltos',
      img: `${rootAssets}/scrambleds.jpg`
    },
    {
      name: 'Pescados',
      img: `${rootAssets}/fishs.jpg`
    },
    {
      name: 'Carnes',
      img: `${rootAssets}/meats.jpg`
    },
    {
      name: 'Postres',
      img: `${rootAssets}/desserts.jpg`
    }
  ];

  constructor(
    private login: LoginService,
    private menuService: MenuService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.login.goToLogin(this.login.isLogged());
  }

  getCollectionItems(name): void {
    this.presentLoading();
    this.collectionName = name;

    switch(name) {
      case 'Entrantes':
        this.menuService.getEntrees().subscribe(items => this.openCollection(items));
        break;
      case 'Tostas':
        this.menuService.getToasts().subscribe(items => this.openCollection(items));
        break;
      case 'Ensaladas':
        this.menuService.getSalads().subscribe(items => this.openCollection(items));
        break;
      case 'Pastas':
        this.menuService.getPastas().subscribe(items => this.openCollection(items));
        break;
      case 'Revueltos':
        this.menuService.getScrambleds().subscribe(items => this.openCollection(items));
        break;
      case 'Pescados':
        this.menuService.getFishs().subscribe(items => this.openCollection(items));
        break;
      case 'Carnes':
        this.menuService.getMeats().subscribe(items => this.openCollection(items));
        break;
      case 'Postres':
        this.menuService.getDesserts().subscribe(items => this.openCollection(items));
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

  async openCollection(items) {
    this.collectionItems = items;

    const modalOptions = {
      component: ModalMenuPage,
      componentProps: {
        collectionName: this.collectionName,
        collectionItems: this.collectionItems
      }
    };
    const modal: HTMLIonModalElement = await this.modalController.create(modalOptions);
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         this.goMenuDetails(detail.data);
       }
    });
    
    this.loadingController.dismiss();
    await modal.present();
  }

  goMenuDetails(detail) {
    if (detail.resultType == 'post-put') {
      this.router.navigate(['/', 'menu', detail.resultValue]);
    }
  }
}
