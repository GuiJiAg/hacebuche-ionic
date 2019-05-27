import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ModalWinesPageModule } from '../modal-wines/modal-wines.module';

import { WinesPage } from './wines.page';

const routes: Routes = [
  {
    path: '',
    component: WinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalWinesPageModule
  ],
  declarations: [WinesPage]
})
export class WinesPageModule {}
