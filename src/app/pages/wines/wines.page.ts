import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';

import { Wine } from '../../models/wine';
import { WinesService } from '../../services/wines.service';
import { LoginService } from '../../services/login.service';
import { ModalWinesPage } from '../modal-wines/modal-wines.page';

const rootAssets = '../../../assets';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage implements OnInit {
  collectionName: string;
  collectionItems: Wine[];
  collections = [
    {
      name: 'Andaluces',
      img: `${rootAssets}/andalusianWine.jpg`
    },
    {
      name: 'Rioja',
      img: `${rootAssets}/RiojaWines.jpg`
    },
    {
      name: 'Ribera del Duero',
      img: `${rootAssets}/RiberaWines.jpg`
    },
    {
      name: 'Castilla',
      img: `${rootAssets}/CastillaWines.jpg`
    },
    {
      name: 'Albariños',
      img: `${rootAssets}/Albariños.jpg`
    },
    {
      name: 'Rueda',
      img: `${rootAssets}/RuedaWines.jpg`
    },
    {
      name: 'Olorosos',
      img: `${rootAssets}/olorosos.jpg`
    }
  ];

  constructor(
    private login: LoginService,
    private winesService: WinesService,
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
      case 'Andaluces':
        this.winesService.getAndalusianWines().subscribe(items => this.openCollection(items));
        break;
      case 'Rioja':
        this.winesService.getRiojaWines().subscribe(items => this.openCollection(items));
        break;
      case 'Ribera del Duero':
        this.winesService.getRiberaWines().subscribe(items => this.openCollection(items));
        break;
      case 'Castilla':
        this.winesService.getCastillaWines().subscribe(items => this.openCollection(items));
        break;
      case 'Albariños':
        this.winesService.getAlbarinios().subscribe(items => this.openCollection(items));
        break;
      case 'Rueda':
        this.winesService.getRuedaWines().subscribe(items => this.openCollection(items));
        break;
      case 'Olorosos':
        this.winesService.getOlorosos().subscribe(items => this.openCollection(items));
        break;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'dots',
      duration: 1000,
      translucent: true
    });

    await loading.present();
  }

  async openCollection(items) {
    this.collectionItems = items;

    const modalOptions = {
      component: ModalWinesPage,
      componentProps: {
        collectionName: this.collectionName,
        collectionItems: this.collectionItems
      }
    };
    const modal: HTMLIonModalElement = await this.modalController.create(modalOptions);
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         this.goWineDetails(detail.data);
       }
    });
    
    await modal.present();
  }

  goWineDetails(detail) {
    if (detail.resultType == 'post-put') {
      this.router.navigate(['/', 'wines', detail.resultValue]);
    }
  }
}
